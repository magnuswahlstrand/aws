import {EventBridgeHandler} from "aws-lambda";
import {DynamoDB} from "aws-sdk";

const tableName = process.env.TABLE_NAME ?? ""

const dynamoDb = new DynamoDB.DocumentClient();


export const handler: EventBridgeHandler<string, { id: string }, void> = async (evt) => {
    const PK = `${evt["detail-type"]}#${evt.detail.id}`

    const putParams = {
        TableName: tableName,
        Item: {
            PK: PK,
            event: evt,
        }
    };

    await dynamoDb.put(putParams).promise();
};
