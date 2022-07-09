import {Api, ReactStaticSite, StackContext, Table} from "@serverless-stack/resources";

export function MyStack({stack}: StackContext) {
    const table = new Table(stack, "Counter", {
        fields: {
            counter: "string"
        },
        primaryIndex: {partitionKey: "counter"}
    })

    const api = new Api(stack, "api", {
        defaults: {
            function: {
                permissions: [table],
                environment: {
                    tableName: table.tableName,
                }
            },
        },
        routes: {
            "GET /": "functions/lambda.handler",
        },
    });
    const site = new ReactStaticSite(stack, "ReactSite", {
        path: "frontend",
        environment: {
            REACT_APP_API_URL: api.url,
        }
    })

    stack.addOutputs({
        SiteUrl: site.url,
        ApiEndpoint: api.url
    });
}
