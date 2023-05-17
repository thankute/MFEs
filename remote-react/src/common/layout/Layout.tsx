import React from 'react'
import { Layout } from "antd";
import Sidebar from './sidebar/Index';
import { Content } from 'antd/es/layout/layout';
import { Outlet } from "react-router-dom";


const PageLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh' }} hasSider>
            <Sidebar />
            <Layout>
                <Content id="page-content">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    )
}

export default PageLayout