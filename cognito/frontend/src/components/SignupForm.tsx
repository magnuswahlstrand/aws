import {Box, Button, Group, PasswordInput, Space, TextInput, Title} from '@mantine/core';
import {useForm} from '@mantine/form';
import {useMutation} from "react-query";
import {Auth} from "aws-amplify";
import {useNavigate} from "react-router-dom";


interface signUpParams {
    email: string,
    password: string
}

const signUp = async ({email, password}: signUpParams) => {
    const params = {
        username: email,
        password: password,
        attributes: {
            email: email,
        },
        validationData: []
    }
    console.log(params)
    return Auth.signUp(params)
};


export function SignupForm() {
    let navigate = useNavigate();

    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const {mutate, error} = useMutation(signUp, {
        onSuccess: data => {
            console.log('react-query-success', data)
            navigate("/verify_mail")
        },
        onError: error => {
            console.log('react-query-error', error)
        }
    })
    const handleSubmit = (param: signUpParams) => {
        return mutate({email: param.email, password: param.password});
    };
    return (

        <Box sx={{maxWidth: 300}} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Space h="xl"/>
                <Title
                    mt="xl"
                    order={1}>
                    Sign up</Title>
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
                    description="Password must include at least one letter, number and special character"
                    {...form.getInputProps('password')}
                />

                <Group position="right" mt="md">
                    <Button type="submit">Submit</Button>
                </Group>
            </form>
        </Box>
    );
}
