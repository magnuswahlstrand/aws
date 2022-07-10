import {Function, StackContext, Table} from "@serverless-stack/resources";

export function MyStack({stack}: StackContext) {
    const fn = new Function(stack, "trpc", {
        handler: "functions/lambda.handler",
        url: true
    })

    stack.addOutputs({
        FunctionURL: fn.url ?? ""
    });
}
