import {Box, Button, Group, PasswordInput, Space, TextInput, Title} from '@mantine/core';
import {useForm} from '@mantine/form';
import {useMutation} from "react-query";
import {Auth} from "aws-amplify";
import {useNavigate} from "react-router-dom";


interface verifyParams {
    email: string,
    code: string
}

const verifyCode = async ({email, code}: verifyParams) => {
    console.log(code)
    return Auth.confirmSignUp(email, code)
};


export function VerifyForm() {
    let navigate = useNavigate();

    const form = useForm({
        initialValues: {
            email: '',
            code: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
        },
    });

    const {mutate, error} = useMutation(verifyCode, {
        onSuccess: data => {
            console.log('react-query-success', data)
            navigate("/login")
        },
        onError: error => {
            console.log('react-query-error', error)
        }
    })
    const handleSubmit = (param: verifyParams) => {
        return mutate({email: param.email, code: param.code});
    };
    return (

        <Box sx={{maxWidth: 300}} mx="auto">
            <form onSubmit={form.onSubmit(handleSubmit)}>
                <Space h="xl"/>
                <Title mt="xl" order={1}>Confirm e-mail</Title>
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
                    placeholder="Verification Code"
                    label="Verification Code"
                    {...form.getInputProps('code')}
                />

                <Group position="right" mt="md">
                    <Button type="submit">Verify</Button>
                </Group>
            </form>
        </Box>
    );
}
