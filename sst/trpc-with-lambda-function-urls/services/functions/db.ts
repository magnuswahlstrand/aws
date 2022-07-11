import {DynamoDB} from "aws-sdk";

const tableName = process.env.TABLE_NAME ?? ""

const dynamoDb = new DynamoDB.DocumentClient();

type ToDo = {
    id: string
    description: string
    completed: boolean
}

export const createToDo = async (id: string, description: string) => {
    const todo = {
        id: id,
        description: description,
        completed: false,
    }

    const putParams = {
        TableName: tableName,
        Item: todo
    };

    await dynamoDb.put(putParams).promise();
}

export const completeToDo = async (id: string) => {
    const updateParams = {
        TableName: tableName,
        Key: {
            id: id,
        },
        UpdateExpression: `set completed = :completed`,
        ExpressionAttributeValues: {
            ":completed": true,
            ":id": id,
        },
        ConditionExpression: "id = :id",
    };

    await dynamoDb.update(updateParams).promise();
}

export const listToDos = async () => {
    const resp = await dynamoDb.scan({
        TableName: tableName
    }).promise()
    return resp.Items?.map((item) => item as ToDo);
};
