import { Row } from 'antd';
import React from 'react';
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error: any = useRouteError();
    console.error('aaaaa', error);

    return (
        <Row justify={"center"} align={"middle"} style={{ width: '100vw', height: '100vh' }}>
            <div id="error-page">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    <i>{error}</i>
                </p>
            </div>
        </Row>
    );
}