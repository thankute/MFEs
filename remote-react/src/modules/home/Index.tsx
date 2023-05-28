import { Col, Row } from 'antd'
import React from 'react'
import Post from './components/Post'
import UserSuggest from './components/UserSuggest'
import Story from './components/Story'
import './assets/scss/home.scss';

const Index = () => {
    return (
        <>
            <Row style={{ backgroundColor: "#000" }}>
                <Col span={24} style={{ display: 'flex', justifyContent: "center", }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: "center", width: 630 }}>
                        <Story />
                        <div className='posts'>
                            <Post />
                            <Post />
                            <Post />
                        </div>
                    </div>

                    <div className="">
                        <UserSuggest />

                    </div>
                </Col>
                {/* <Col span={9}>
                </Col> */}
            </Row>
        </>
    )
}

export default Index;