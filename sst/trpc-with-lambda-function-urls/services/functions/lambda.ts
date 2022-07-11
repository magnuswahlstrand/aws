import * as trpc from '@trpc/server';
import * as z from "zod"
import KSUID from 'ksuid';
import {awsLambdaRequestHandler} from '@trpc/server/adapters/aws-lambda';
import {completeToDo, createToDo, listToDos} from "./db";

const appRouter = trpc.router()
    .mutation('createToDo', {
        input: z.string(),
        async resolve(req) {
            const id = KSUID.randomSync().string
            await createToDo(id, req.input)
            return id
        }
    })
    .mutation('completeToDo', {
        input: z.string(),
        async resolve(req) {
            return completeToDo(req.input)
        }
    })
    .query('listToDos', {
        async resolve(_) {
            return listToDos()
        },
    })
;

export type AppRouter = typeof appRouter;

export const handler = awsLambdaRequestHandler({
    router: appRouter,
})
