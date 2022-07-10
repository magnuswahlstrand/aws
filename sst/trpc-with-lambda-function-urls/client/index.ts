import type {AppRouter} from '../services/functions/lambda';
import {createTRPCClient} from '@trpc/client';

const function_url = "https://kr2madrbusxrglf3aamfj7o4sy0hlebb.lambda-url.us-east-1.on.aws"

const client = createTRPCClient<AppRouter>({
    url: function_url,
});

(async function () {
    const greeting = await client.query('sayHello', "Bilbo");
    console.log(greeting)
})()
