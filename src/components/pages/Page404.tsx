import { FC, memo } from "react";
import { Helmet } from "react-helmet-async";

export const Page404:FC = memo(() => {
    return (
        <>
            <Helmet>
                <title>ページが見つかりません | ユーザー管理アプリ</title>
            </Helmet>
            <p>Page404</p>
        </>
    );
})