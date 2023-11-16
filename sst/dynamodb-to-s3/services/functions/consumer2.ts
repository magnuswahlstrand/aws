import {KinesisStreamEvent} from "aws-lambda/trigger/kinesis-stream";


export async function handler(message: KinesisStreamEvent) {
    message.Records.forEach((record) => {
        console.log("Message 2 processed!", JSON.stringify(record, null, 2));
    })
    console.log("Message 2 processed!");

    return {};
}
