import {EventBus, Api, StackContext} from "@serverless-stack/resources";

export function Stack({stack}: StackContext) {
    const bus = new EventBus(stack, "EventBus", {})

    bus.addRules(stack, {
        "order_created": {
            pattern: {
                detailType: ["order.created"],
            },
            targets: {
                function: "functions/log_events.go"
            }
        }
    })

    const api = new Api(stack, "api", {
        defaults: {
            function: {
                permissions: [bus],
                environment: {
                    EVENT_BUS_NAME: bus.eventBusName
                }
            },

        },
        routes: {
            "POST /order": "functions/create.go",
        },
    });

    stack.addOutputs({
        ApiEndpoint: api.url,
        BusName: bus.eventBusName
    });
}
