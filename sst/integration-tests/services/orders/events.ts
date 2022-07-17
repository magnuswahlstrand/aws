import {EventBridgeClient, PutEventsCommand} from "@aws-sdk/client-eventbridge";
import {Order, OrderEvent} from "./model";

const client = new EventBridgeClient({})

export const send = async (eventType: OrderEvent, orderEvent: Order) => {
    await client.send(
        new PutEventsCommand({
            Entries: [
                {
                    EventBusName: process.env.EVENT_BUS_NAME,
                    DetailType: eventType,
                    Detail: JSON.stringify(orderEvent),
                    Source: "order_fns",
                }
            ]
        })
    )
}
