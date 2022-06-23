import React, {useState} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import {trpc} from './utils/trpc';

const api_url = process.env.REACT_APP_API_URL ?? ""

export function Hello() {
    const hello = trpc.useQuery(['hello', 'Magnus']);
    if (!hello.data) return <div>Loading...</div>;

    return (
        <div>
            <p>{hello.data.name}</p>
        </div>
    );
}

export default function App() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            url: `${api_url}`,
        }),
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <Hello/>
            </QueryClientProvider>
        </trpc.Provider>
    );
}
