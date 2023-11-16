import { StackContext, Api } from "@serverless-stack/resources";

export function MyStack({ stack, app }: StackContext) {
    // Create Api
    const api = new Api(stack, "Api", {
        // authorizers: {
        //     auth0: {
        //         type: "jwt",
        //         jwt: {
        //             issuer: process.env.AUTH0_DOMAIN + "/",
        //             audience: [process.env.AUTH0_DOMAIN + "/api/v2/"],
        //         },
        //     },
        // },
        // defaults: {
        //     authorizer: "auth0",
        // },
        routes: {
            // "GET /private": "functions/private.main",
            "GET /public": {
                function: "functions/public.handler",
                authorizer: "none",
            },
        },
    });

    // Show the API endpoint and other info in the output
    stack.addOutputs({
        ApiEndpoint: api.url,
    });
}
