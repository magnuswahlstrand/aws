import {SSTConfig} from "sst";
import {Api} from "sst/constructs";

export default {
    config(_input) {
        return {
            name: "rest-api-go",
            region: "us-east-1",
        };
    },
    stacks(app) {
        app.setDefaultFunctionProps({
            runtime: "go",
        });
        app.stack(function Stack({stack}) {
            const api = new Api(stack, "api", {
                routes: {
                    "ANY /{proxy+}": "functions/lambda/main.go",
                },
            });
            stack.addOutputs({
                ApiEndpoint: api.url,
            });
        });
    },
} satisfies SSTConfig;

