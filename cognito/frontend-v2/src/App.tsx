import {Authenticator, Button, Card, Heading, Text, View} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function App() {
    return (
        <>
            <Authenticator>
                {({signOut = (() => {}), user}) => {
                    return (
                        <View width="40rem" textAlign="center">
                            <Card variation="elevated">
                                <Heading level={1}>Welcome!</Heading>
                                <Text margin="2em">
                                    You are logged in as <b>{user?.attributes?.email}</b>
                                </Text>
                                <Button variation="primary" onClick={() => signOut()}>Log out now!</Button>
                            </Card>
                        </View>
                    )
                }}
            </Authenticator>
        </>
    );
}
