import * as trpc from '@trpc/server';
import * as z from "zod"
import {awsLambdaRequestHandler} from '@trpc/server/adapters/aws-lambda';

const appRouter = trpc.router()
    .query('sayHello', {     // 1. Procedure name
        input: z.string(),                  // 2. Input
        async resolve(req) {
            return `Hello, ${req.input}!`;  // 3. Response
        },
    });

export type AppRouter = typeof appRouter;

export const handler = awsLambdaRequestHandler({
    router: appRouter,
})
