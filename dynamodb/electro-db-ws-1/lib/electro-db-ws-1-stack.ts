import {CfnOutput, Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

export class ElectroDbWs1Stack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        // The code that defines your stack goes here

        // example resource
        const table = new dynamodb.Table(this, 'Table', {
            partitionKey: {
                type: dynamodb.AttributeType.STRING,
                name: 'pk',
            },
            sortKey: {
                type: dynamodb.AttributeType.STRING,
                name: 'sk',
            }
        });

        new CfnOutput(this, 'TableName', {
            value: table.tableName,
        })
    }
}
