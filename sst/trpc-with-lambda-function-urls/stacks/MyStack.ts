import {Function, StackContext, Table} from "@serverless-stack/resources";

export function MyStack({stack}: StackContext) {
    const todoTable = new Table(stack, "table", {
        fields: {
            id: "string",
        },
        primaryIndex: {partitionKey: "id"},
    })


    const fn = new Function(stack, "trpc", {
        handler: "functions/lambda.handler",
        permissions: [todoTable],
        environment: {
            TABLE_NAME: todoTable.tableName,
        },
        url: true
    })

    stack.addOutputs({
        FunctionURL: fn.url ?? ""
    });
}
