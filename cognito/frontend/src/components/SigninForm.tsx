import {Box, Button, Group, PasswordInput, Space, TextInput, Title} from '@mantine/core';
import {useForm} from '@mantine/form';
import {useMutation} from "react-query";
import {Auth} from "aws-amplify";
import {useNavigate} from "react-router-dom";


interface signInParams {
    email: string,
    password: string
}

const signIn = async ({email, password}: signInParams) => {
    const params = {
        username: email,
        password: password,
        attributes: {
            email: email,
        },
        validationData: []
    }
    console.log("sign in")
    console.log(params)
    return Auth.signIn(params)
};


export function SigninForm() {
    const navigate = useNavigate();

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const {mutate, error} = useMutation(signIn, {
        onSuccess: data => {
            console.log('react-query-success', data)
            navigate("/")
        },
        onError: error => {
            console.log('react-query-error', error)

        }
    })
    const handleSubmit = (param: signInParams) => {
        return mutate({email: param.email, password: param.password});
    };
    return (

        <Box sx={{maxWidth: 300}} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Space h="xl"/>
                <Title
                    mt="xl"
                    order={1}>
                    Sign in</Title>
                <TextInput
                    mt="xl"
                    className={"mt-5"}
                    required
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                />
                <PasswordInput
                    mt="xl"
                    required
                    placeholder="Password"
                    label="Password"
                    {...form.getInputProps('password')}
                />

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
}
