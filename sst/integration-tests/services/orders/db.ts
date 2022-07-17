import {DynamoDB} from "aws-sdk";
import {Order} from "./model";


const tableName = process.env.TABLE_NAME ?? ""
const dynamoDb = new DynamoDB.DocumentClient();

export const storeOrder = async (order: Order) => {
    const putParams = {
        TableName: tableName,
        Item: order
    };

    await dynamoDb.put(putParams).promise();
}

export const fulfillOrder = async (id: string, fulfilledBy: string): Promise<Order> => {
    const now = new Date().toISOString()
    const updateParams = {
        TableName: tableName,
        Key: {
            id: id,
        },
        UpdateExpression: `set fulfilled_by = :fulfilled_by, #st = :state, updated_at = :updated_at`,
        ExpressionAttributeValues: {
            ":state": "fulfilled",
            ":fulfilled_by": fulfilledBy,
            ":updated_at": now,
            ":expected_state": "created",
        },
        ConditionExpression: `attribute_not_exists(fulfilled_by) and #st = :expected_state`,
        ExpressionAttributeNames: {
            "#st": "state"
        },
        ReturnValues: "ALL_NEW",
    };
    console.log(updateParams)


    const resp = await dynamoDb.update(updateParams).promise();
    return Order.parse(resp.Attributes)

}
