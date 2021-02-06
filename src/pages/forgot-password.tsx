import React, { useState } from 'react';
import { withUrqlClient } from 'next-urql';
import { createUrqlClient } from '../utils/createUrqlClient';
import { Wrapper } from '../components/Wrapper';
import { Formik, Form } from 'formik';
import { InputField } from '../components/InputField';
import { Box, Flex, Link, Button } from '@chakra-ui/react';
import router from 'next/dist/next-server/lib/router/router';
import { useForgotPasswordMutation } from '../generated/graphql';

const ForgotPasssword: React.FC<{}> = ({}) => {
        const [complete, setComplete] = useState(false);
         const [, forgotPassword] = useForgotPasswordMutation();
        return (
        <Wrapper variant="small">
        <Formik 
          initialValues={{ email: "" }}
          onSubmit={async (values, { setErrors }) => {
                await forgotPassword(values);
                setComplete(true);
          }}
        >
            {({ isSubmitting })=> complete ? ( 
            <Box>We have sent a forgot password link to the email provided.</Box>
            ) : (
              <Form>
                <InputField name="email" placeholder="email" label="Email" type="email" />
                <Button mt={4} isLoading={isSubmitting} type="submit" colorScheme="teal">forgot password</Button>
              </Form>
            )}
        </Formik>
      </Wrapper>);
};


export default withUrqlClient(createUrqlClient)(ForgotPasssword);