import { StackContext, Api } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  const api = new Api(stack, "api", {
    routes: {
      "POST /": "functions/lambda.go",
    },
  });
  stack.addOutputs({
    ApiEndpoint: api.url
  });
}
