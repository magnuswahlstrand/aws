import {KinesisStream, StackContext, Table} from "@serverless-stack/resources";

export function MyStack({stack}: StackContext) {
    // create a kinesis stream
    const stream = new KinesisStream(stack, "Stream", {
        defaults: {},
        consumers: {
            consumer1: "functions/consumer1.handler",
            consumer2: "functions/consumer2.handler",
        },
    });

    new Table(stack, "Table", {
        fields: {
            PK: "string",
            SK: "string",
        },
        primaryIndex: { partitionKey: "PK" },
        kinesisStream: stream,
    })

    // Show the endpoint in the output
    stack.addOutputs({});
}
