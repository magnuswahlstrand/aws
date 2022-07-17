import {v4 as uuid} from 'uuid';
import {APIGatewayProxyHandlerV2} from "aws-lambda";
import * as db from "./db"
import * as events from "./events";
import {Order} from "./model";


type CreateOrderRequest = {
    amount: number;
}


export const handler: APIGatewayProxyHandlerV2 = async (req) => {
    const orderReq: CreateOrderRequest = JSON.parse(req.body ?? "")
    console.log("received", orderReq)

    const now = new Date().toISOString()

    // Construct order
    const order: Order = {
        id: uuid(),
        amount: orderReq.amount,
        state: "created",
        created_at: now,
        updated_at: now
    }


    await db.storeOrder(order)
    await events.send("order.created", order)

    return {
        statusCode: 200,
        body: JSON.stringify(order),
    }
};
