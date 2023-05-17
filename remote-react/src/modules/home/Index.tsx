import { Col, Row } from 'antd'
import React from 'react'
import Post from './components/Post'
import UserSuggest from './components/UserSuggest'
import Story from './components/Story'
import './assets/scss/home.scss';

const Index = () => {
    return (
        <>
            <Row>
                <Col span={15}>
                    <Story />
                    <div className='posts'>
                        <Post />
                        <Post />
                        <Post />

                    </div>
                </Col>
                <Col span={9}>
                    <UserSuggest />
                </Col>
            </Row>
        </>
    )
}

export default Index;