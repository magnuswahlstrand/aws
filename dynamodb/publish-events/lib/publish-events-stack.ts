import {CfnOutput, Stack, StackProps} from 'aws-cdk-lib';
import {Construct} from 'constructs';
import {AttributeType, Table} from "aws-cdk-lib/aws-dynamodb";

export class PublishEventsStack extends Stack {
    constructor(scope: Construct, id: string, props?: StackProps) {
        super(scope, id, props);

        const table = new Table(this, 'ElectroDbTable', {
            partitionKey: {
                name: 'pk',
                type: AttributeType.STRING,
            }
        })


        new CfnOutput(this, 'TableName', {
            value: table.tableName,
        })
    }
}
