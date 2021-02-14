import { Box, Flex, Button } from '@chakra-ui/react';
import { Formik, Form } from 'formik';
import React from 'react'
import { InputField } from '../components/InputField';
import { Wrapper } from '../components/Wrapper';
import { useCreatePostMutation } from '../generated/graphql';
import { useRouter } from "next/router";
import { createUrqlClient } from '../utils/createUrqlClient';
import { withUrqlClient } from 'next-urql';
import { Layout } from '../components/Layout';

const CreatePost: React.FC<{}> = ({ }) => {
    const router = useRouter();
    const [, createPost] = useCreatePostMutation();
    return (
        <Layout variant='small'>
            <Formik
                initialValues={{ title: "", text: "" }}
                onSubmit={async (values) => {
                    const {error} = await createPost({ input: values });
                    console.log('error:', error)
                    if (error?.message.includes('Not authenticated')) {
                        router.push('/login')
                    } else {
                        router.push('/');
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField name="title" placeholder="Title" label="title" />
                        <Box mt={4}>
                            <InputField name="text" placeholder="text..." label="Body" textarea />
                        </Box>
                        <Flex mt={2}>
                        </Flex>
                        <Button mt={4} isLoading={isSubmitting} type="submit" colorScheme="teal">create Post</Button>
                    </Form>
                )}
            </Formik>
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient)(CreatePost)