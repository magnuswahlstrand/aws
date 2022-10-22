import {Function, StackContext, Table} from "@serverless-stack/resources";

export function MyStack({stack}: StackContext) {
    const orderTable = new Table(stack, 'OrderTable', {
        fields: {
            PK: "string",
            SK: "string",
        },
        primaryIndex: {
            partitionKey: "PK",
            sortKey: "SK"
        },
    })


    const fn = new Function(stack, "TableFn", {
        handler: "functions/lambda/main.go",
        environment: {
            TABLE_NAME: orderTable.tableName,
        },
        permissions: [orderTable],
        url: true
    })

    stack.addOutputs({
        apiEndpoint: fn.url ?? ""
    });
}
