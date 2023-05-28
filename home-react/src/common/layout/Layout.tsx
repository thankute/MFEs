import React from 'react'
import { Col, Layout } from "antd";
import Sidebar from 'remoteReactApp/Sidebar';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from "react-router-dom";


const PageLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh' }} hasSider>
            <Col span={4}>
                <Sidebar />
            </Col>

            <Layout>
                <Content style={{ height: '100vh', margin: 0, padding: 0, overflow: 'auto' }} id="page-content">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default PageLayout