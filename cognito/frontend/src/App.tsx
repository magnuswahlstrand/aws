import React from 'react';
import Amplify from 'aws-amplify';
import awsConfig from './amplify-config';
import {QueryClient, QueryClientProvider, useMutation, useQuery} from "react-query";
import {BrowserRouter, Link} from "react-router-dom";
import {Anchor, AppShell, Button, Header} from "@mantine/core";
import AppRoutes from "./components/AppRoutes";

Amplify.configure(awsConfig);

const queryClient = new QueryClient()


type Props = {
    loggedInAs: string
};

export function HeaderContentLoggedIn({loggedInAs}: Props) {
    return (
        <div>
            <div>Logged in as <b>{loggedInAs}</b></div>
        </div>
    );
}

export function HeaderContentLoggedOut() {
    return (
        <div>
            <Anchor component={Link} to="/sign_up">Sign up</Anchor>
            <Anchor component={Link} to="/sign_in">Sign in</Anchor>
        </div>
    );
};

function Shell() {
    const {data, isLoading} = useQuery(Amplify.Auth.currentAuthenticatedUser())
    const isAuthenticated = Amplify.Auth.user != null

    return (
        <AppShell
            padding="md"
            header={<Header height={60} p="xs">
                {isAuthenticated ? <HeaderContentLoggedIn loggedInAs={Amplify.Auth.user.attributes.email}/> :
                    <HeaderContentLoggedOut/>}
            </Header>
            }
        >

            <AppRoutes isAuthenticated={isAuthenticated}/>
        </AppShell>)
}

function App() {

    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Shell/>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
