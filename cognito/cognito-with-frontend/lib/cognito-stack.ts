import {CfnOutput, Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import * as cognito from "aws-cdk-lib/aws-cognito";

export class CognitoStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // Cognito User Pool with Email Sign-in Type.
        const userPool = new cognito.UserPool(this, 'userPool', {
            signInAliases: {
                email: true
            },
            selfSignUpEnabled: true,
        })

        const userPoolClient = new cognito.UserPoolClient(this, 'userPoolClient', {
            userPool: userPool
        })


        new CfnOutput(this, 'userPoolId', {value: userPool.userPoolId})
        new CfnOutput(this, 'userPoolClientId', {value: userPoolClient.userPoolClientId})
    }
}
