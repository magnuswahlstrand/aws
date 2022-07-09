import {APIGatewayProxyHandlerV2} from "aws-lambda";
import {DynamoDB} from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export const handler: APIGatewayProxyHandlerV2 = async (event) => {
    const tableName = process.env.tableName ?? ""

    const putParams = {
        TableName: tableName,
        Key: {
            counter: "clicks",
        },
        // Update the "tally" column
        UpdateExpression: "SET tally = if_not_exists(tally, :start) + :inc",
        ExpressionAttributeValues: {
            ':inc': 1,
            ':start': 0,
        },
        ReturnValues: "UPDATED_NEW"
    };

    const ret = await dynamoDb.update(putParams).promise();

    return {
        statusCode: 200,
        body: ret.Attributes?.tally,
    };
};
