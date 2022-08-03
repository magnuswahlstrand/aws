import {StackContext, Table} from "@serverless-stack/resources";

export function MyStack({stack}: StackContext) {
    const table = new Table(stack, "table", {
        fields: {pk: "string", sk: "string",},
        primaryIndex: {partitionKey: "pk", sortKey: "sk"},
    });
    stack.addOutputs({
        TableName: table.tableName
    });
}
