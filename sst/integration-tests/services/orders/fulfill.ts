import {APIGatewayProxyHandlerV2} from "aws-lambda";
import * as db from "./db";
import * as events from "./events";


type FulfillOrderRequest = {
    id: string,
    fulfilled_by: string
}


export const handler: APIGatewayProxyHandlerV2 = async (r) => {
    const req: FulfillOrderRequest = JSON.parse(r.body ?? "")

    console.log("received", req)
    console.log("received", typeof req)

    const order = await db.fulfillOrder(req.id, req.fulfilled_by)
    await events.send("order.fulfilled", order)

    return {
        statusCode: 200,
        body: JSON.stringify(order),
    }
};
