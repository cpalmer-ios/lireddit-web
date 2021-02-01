import { Box, Button, Flex, Link } from '@chakra-ui/react';
import React from 'react'
import NextLink from 'next/link';
import { useLogoutMutation, useMeQuery } from '../generated/graphql';

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    const [{ fetching: logoutFetching }, logout] = useLogoutMutation();
    const [{ data, fetching }] = useMeQuery();
    let body = null

    //data is loading
    if (fetching) {
    //user not logged in
    } else if (!data?.me) {
        body = (<>
        <NextLink href="/login">
            <Link color="white" mr={2}>login</Link>
        </NextLink>
        <NextLink href="/register">
            <Link color="white">register</Link>
        </NextLink>
        </>);

    } else {
        body = (
            <Flex>
                <Box mr={2}>{data.me.username}</Box>
                <Button onClick={() => {
                    logout();
                }} 
                isLoading={logoutFetching}
                colorScheme="teal"
                variant="link">logout</Button>
            </Flex>
        )

    //user is logged in
    }
        return (
            <Flex bg="tan" p={4}>
                <Box ml={'auto'}> 
                    {body}
                </Box>
            </Flex>
        );
}