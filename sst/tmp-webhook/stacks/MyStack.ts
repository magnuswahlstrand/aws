import {Function, StackContext} from "@serverless-stack/resources";

export function MyStack({stack}: StackContext) {
    const fn = new Function(stack, "MyFunction", {
        handler: "functions/lambda.handler",
        url: true,
    })

    stack.addOutputs({
        Fn: fn.url!
    });
}
