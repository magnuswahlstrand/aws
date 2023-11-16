import {Api, Function, StackContext, Table} from "@serverless-stack/resources";

export function MyStack({stack}: StackContext) {
    const table = new Table(stack, "OrderTable", {
        fields: {
            PK: "string",
            SK: "string"
        },
        primaryIndex: {partitionKey: "PK", sortKey: "SK"}
    })
    const eventsTable = new Table(stack, "internal-event-store", {
        fields: {
            id: "string",
            timestamp: "number",
            type: "string"
        },
        primaryIndex: {partitionKey: "id", sortKey: "timestamp"},
        globalIndexes: {
            type: {
                partitionKey: "type",
                sortKey: "timestamp",
                projection: "all"
            }
        }
    })

    const createFn = new Function(stack, "CreateOrder", {
        handler: "functions/orders/create.go",
        permissions: [table, eventsTable],
        environment: {
            TABLE_NAME: table.tableName,
            EVENTS_TABLE_NAME: eventsTable.tableName
        }
    })
    const getFn = new Function(stack, "GetOrder", {
        handler: "functions/orders/get.go",
        permissions: [table],
        environment: {
            TABLE_NAME: table.tableName,
        }
    })

    const api = new Api(stack, "api", {
        routes: {
            "GET /": getFn,
            "POST /": createFn,
        },
    });
    stack.addOutputs({
        ApiEndpoint: api.url,
    });
}
