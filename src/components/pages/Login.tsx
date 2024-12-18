import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { ChangeEvent, FC, memo, useState } from "react";

import { PrimaryButton } from "../atoms/Button/PrimaryButton";
import { useAuth } from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";

export const Login:FC = memo(() => {
    const { login, loading} = useAuth();
    const [userId, setUserId] = useState('');

    const onChangeUserId = (event: ChangeEvent<HTMLInputElement>) => setUserId(event.target.value);

    const onClickLogin = () => login(userId);

    return (
        <>
            <Helmet>
                <title>ログイン | ユーザー管理アプリ</title>
            </Helmet>
            <Flex align="center" justify="center" height="100vh" bg={"gray.200"}>
                <Box bg="white" w="sm" p={4} borderRadius="md" shadow={"md"}>
                    <Heading as="h1" size={"lg"} textAlign={"center"}>ユーザー管理アプリ</Heading>
                    <Divider my={4} />
                    <Stack spacing={6} py={4} px={10}>
                        <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
                        <PrimaryButton 
                            loading={loading} 
                            disabled={userId === ""} 
                            onClick={onClickLogin}
                        >ログイン</PrimaryButton>
                    </Stack>
                </Box>
            </Flex>
        </>
    );
})