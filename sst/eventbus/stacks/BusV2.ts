// import {EventBus, StackContext, Queue, Function} from "@serverless-stack/resources";
//
// export default function Bus(ctx: StackContext) {
//     const bus = new EventBus(ctx.stack, "bus", {})
//
//     // https://youtu.be/iMsPztMiFIk?t=2058
//     new Function(ctx.stack, "send_order", {
//         handler: "functions/create_event.go",
//         permissions: [bus],
//         environment: {
//             BUS_NAME: bus.eventBusName
//         }
//     })
//
//     bus.addRules(ctx.stack, {
//         "order_created": {
//             pattern: {
//                 detailType: ["order.created"],
//             },
//             targets: {
//                 function: new Queue(ctx.stack, "order_created_queue", {
//                     consumer:  {
//                         function: {
//                             functionName: "magnus-order-func",
//                             handler: "functions/lambda.go"
//                         }
//                     }
//                 })
//             }
//         }
//     })
//
//
//
//     ctx.stack.addOutputs({
//         BusARN: bus.eventBusArn,
//         BusName: bus.eventBusName
//     });
//     return bus
// }
