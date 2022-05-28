import Welcome from "./components/Welcome";
import {Authenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function App() {
    return (
        <>
            <Authenticator>
                {({ signOut, user }) => {
                    if (!user) {
                        return <div>not logged in</div>
                    }

                    return (
                        <div>
                            {/*<div style={styles.container}>*/}
                            <h1>Hello {user.username}</h1>
                            <h1>Hello {user.attributes?.email}</h1>
                            <button style={styles.button} onClick={signOut}>Sign out</button>
                            <br/>
                            <h2>Amplify Todos</h2>
                        </div>
                    )
                }}
            </Authenticator>
        </>
    );
}

const styles = {
    container: { width: 400, margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 20 },
    todo: {  marginBottom: 15 },
    input: { border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18 },
    todoName: { fontSize: 20, fontWeight: 'bold' },
    todoDescription: { marginBottom: 0 },
    button: { backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px' }
}
