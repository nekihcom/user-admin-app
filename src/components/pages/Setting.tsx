import { FC, memo } from "react";
import { Helmet } from "react-helmet-async";

export const Setting:FC = memo(() => {
    return (
        <>
            <Helmet>
                <title>設定 | ユーザー管理アプリ</title>
            </Helmet>
            <p>Setting</p>
        </>
    );
})