import * as trpc from '@trpc/server';
import {z} from 'zod';
import {awsLambdaRequestHandler} from '@trpc/server/adapters/aws-lambda';

const appRouter = trpc.router()
    .query('hello', {
        input: z.string(),
        async resolve(req) {
            return {id: req.input, name: 'Bilbo'};
        },
    });

export type AppRouter = typeof appRouter;

export const handler = awsLambdaRequestHandler({
    router: appRouter,
})
