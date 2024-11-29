import { FC, memo } from "react";
import { Helmet } from "react-helmet-async";

export const Home:FC = memo(() => {
    return (
        <>
            <Helmet>
                <title>ホーム | ユーザー管理アプリ</title>
            </Helmet>
            <p>Home</p>
        </>
    );
})