import React from 'react';
import { Form, Formik } from 'formik';
import { Wrapper } from '../components/Wrapper';
import { InputField } from '../components/InputField';
import { Box, Button } from '@chakra-ui/react';

interface registerProps {}

const Register: React.FC<registerProps> = ({}) => {
      return (
        <Wrapper variant="small">
          <Formik 
            initialValues={{ username: "", password: "" }}
            onSubmit={(values) => {
                console.log(values);
            }}
          >
              {({ isSubmitting })=> (
                <Form>
                  <InputField name="username" placeholder="username" label="username" />
                  <Box mt={4}>
                  <InputField name="password" placeholder="password" label="password" type="password" />
                  </Box>
                  <Button mt={4} isLoading={isSubmitting} type="submit" variantColor="teal">register</Button>
                </Form>
              )}
          </Formik>
        </Wrapper>
      )
};

export default Register