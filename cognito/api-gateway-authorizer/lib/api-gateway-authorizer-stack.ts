import * as cdk from 'aws-cdk-lib';
import {Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';

import * as apigwv2 from '@aws-cdk/aws-apigatewayv2-alpha';
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as integrations from '@aws-cdk/aws-apigatewayv2-authorizers-alpha';
import * as apigwintegration from "@aws-cdk/aws-apigatewayv2-integrations-alpha";
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from "path";


export class ApiGatewayAuthorizerStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // Cognito User Pool with Email Sign-in Type.
        const userPool = new cognito.UserPool(this, 'userPool', {
            signInAliases: {
                email: true
            },
            selfSignUpEnabled: true,
        })

        const fullAccessScope = new cognito.ResourceServerScope({
            scopeName: 'magnus-api',
            scopeDescription: 'Magnus API'
        });

        const userServer = userPool.addResourceServer('ResourceServer', {
            identifier: 'users',
            scopes: [fullAccessScope],
        });

        const client = userPool.addClient('consoleClient', {
            generateSecret: true,
            oAuth: {
                flows: {
                    clientCredentials: true
                },
                scopes: [cognito.OAuthScope.resourceServer(userServer, fullAccessScope)],
            }
        })

        const domain = userPool.addDomain('poolDomain', {
            cognitoDomain: {
                domainPrefix: 'hej'
            }
        })

        const lambdaFunction = new NodejsFunction(this, 'my-function', {
            runtime: lambda.Runtime.NODEJS_16_X,
            handler: 'create_user',
            entry: path.join(__dirname, `/../src/protected-function/index.ts`),
        });


        // HTTP API
        const api = new apigwv2.HttpApi(this, 'HttpApi');

        // Authorizer
        const authorizer = new integrations.HttpUserPoolAuthorizer('MyAuthorizer', userPool, {
            userPoolClients: [client]
        });


        // Lambda integration
        const fnInt = new apigwintegration.HttpLambdaIntegration('Integration', lambdaFunction, {})
        api.addRoutes({
            integration: fnInt,
            path: '/books',
            authorizer,
        })
        api.addRoutes({
            integration: fnInt,
            path: '/books2',
        })

        new cdk.CfnOutput(this, 'apiUrl', {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            value: api.url!,
        });

        new cdk.CfnOutput(this, 'UserPoolID', {value: userPool.userPoolId});
        new cdk.CfnOutput(this, 'ClientID', {value: client.userPoolClientId});
        new cdk.CfnOutput(this, 'UserPoolResourceServer', {value: userServer.userPoolResourceServerId});
        new cdk.CfnOutput(this, 'DomainName', {value: domain.domainName});
        new cdk.CfnOutput(this, 'AcutalDomainName', {
            value: `https://${domain.domainName}.auth.eu-west-1.amazoncognito.com`
        });
        new cdk.CfnOutput(this, 'DomainNameCloudFront', {value: domain.cloudFrontDomainName});
        new cdk.CfnOutput(this, 'ScopeName', {value: fullAccessScope.scopeName});
        new cdk.CfnOutput(this, 'FullScope', {value: `${userServer.userPoolResourceServerId}/${fullAccessScope.scopeName}`});
    }
}
