import {APIGatewayProxyHandlerV2} from "aws-lambda";
import {captureLambdaHandler, Tracer} from "@aws-lambda-powertools/tracer";
import {injectLambdaContext, Logger} from "@aws-lambda-powertools/logger";
import {logMetrics, Metrics} from "@aws-lambda-powertools/metrics";
import middy from "@middy/core";

export const lambdaHandler: APIGatewayProxyHandlerV2 = async (event) => {
    throw "lol!"
    return {
        statusCode: 400,
        // headers: {"Content-Type": "text/plain"},
        // body: `Hello, World! Your request was received at ${event.requestContext.time}.`,
    };
};

const commonOpts = {
    serviceName: 'powetool'
}

const tracer = new Tracer({...commonOpts});
const logger = new Logger({...commonOpts});
const metrics = new Metrics({...commonOpts, namespace: 'mynamespace'});

// Inspired by https://github.com/aws-samples/serverless-typescript-demo/blob/main/src/api/get-product.ts
export const handler = middy(lambdaHandler)
    .use(captureLambdaHandler(tracer))
    .use(logMetrics(metrics, {captureColdStartMetric: true}))
    .use(injectLambdaContext(logger, {clearState: true}));
