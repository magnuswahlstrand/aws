import {Api, EventBus, Function, StackContext} from "@serverless-stack/resources";
import * as sns from 'aws-cdk-lib/aws-sns';
import * as subscriptions from 'aws-cdk-lib/aws-sns-subscriptions';

export function Stack({stack}: StackContext) {
    const bus = new EventBus(stack, "EventBus", {})


    const myTopic = new sns.Topic(stack, 'MyTopic');
    myTopic.addSubscription(new subscriptions.EmailSubscription('something@gmail.com'));

    const notifyFn = new Function(stack, "NotifyFn", {
        environment: {
            SNS_TOPIC_ARN: myTopic.topicArn,
        },
        permissions: [myTopic],
        // srcPath: "functions/notify.go"
        handler: "functions/notify.go"
    })

    bus.addRules(stack, {
        "order_created": {
            pattern: {
                detailType: ["order.created"],
            },
            targets: {
                function: "functions/log_events.go",
                invoiceFunction: "functions/create_invoice.go",
                notifyFunction: notifyFn,
            }
        }
    })

    const createOrder = new Function(stack, "CreateOrderFn", {
        permissions: [bus],
        handler: "functions/create.go",
        url: true,
        environment: {
            EVENT_BUS_NAME: bus.eventBusName
        }
    });

    const api = new Api(stack, "api", {
        routes: {
            "POST /order": createOrder,
        },
    });

    stack.addOutputs({
        ApiEndpoint: api.url,
        BusName: bus.eventBusName,
        CreateOrderFunctionUrl: createOrder.url ?? ""
    });
}
