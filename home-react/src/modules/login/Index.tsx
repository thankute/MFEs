import React from 'react'
import Button from 'antd/lib/button';
import { Col, Divider, Form, Row, Space } from 'antd';
import Input from 'antd/es/input/Input';
import InstaPhone from '../../assets/image/iphone-with-profile.jpg';
import Logo from '../../assets/image/logo.png';
import AppleStore from '../../assets/image/ins-appstore.png';
import ChPlay from '../../assets/image/ins-ggplay.png';
import './scss/styles.scss';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values: any) => {
        console.log('values', values)
        if (values.username === 'admin' && values.password === '123456') {
            localStorage.setItem('accessToken', 'Logged in');
            navigate('/');
        }
    }

    return (
        <div className='container'>
            <Row>
                <Col span={12} style={{ display: 'flex', justifyContent: "right", }}>
                    <img src={InstaPhone} alt="instagram" style={{ width: '65%', maxWidth: 500 }} />
                </Col>
                <Col span={7} className='login_form'>
                    <Row justify="center" align="middle" className='login_part'>
                        <img src={Logo} alt='instagram_logo' style={{ margin: '40px' }} />
                        <Form
                            layout='vertical'
                            form={form}
                            onFinish={onFinish}
                            style={{ width: '100%' }}
                        >
                            <Form.Item
                                label=""
                                name="username"
                                rules={[
                                    { required: true, message: "Vui lòng nhập username" },
                                    { whitespace: true, message: "Vui lòng nhập username" },
                                ]}
                            >
                                <Input placeholder='Phone number, username or email' />
                            </Form.Item>
                            <Form.Item
                                label=""
                                name="password"
                                rules={[
                                    { required: true, message: "Vui lòng nhập mật khẩu" },
                                    { whitespace: true, message: "Vui lòng nhập mật khẩu" },
                                ]}
                            >
                                <Input placeholder='Password' type='password' style={{ marginTop: 8 }} />
                            </Form.Item>
                        </Form>
                        <Button
                            type='primary'
                            style={{ width: '100%', marginTop: 16 }}
                            onClick={() => form.submit()}
                        >
                            Log in
                        </Button>
                        <Divider>OR</Divider>
                        <Space size={6} direction='vertical' style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Link to={"/facebook"}>
                                <h3 style={{ color: '#385185' }}>Log in with facebook</h3>
                            </Link>
                            <Link to={"/forgot"}>
                                <h5 style={{ color: '#385185' }}>Forgot password?</h5>
                            </Link>
                        </Space>
                    </Row>

                    <Row justify="center" align="middle" className='login_part' style={{ padding: '20px 0' }} >
                        <h3 style={{ margin: 0, fontWeight: "normal" }}>Don't have an account? <Link to={"signup"}> Sign up</Link></h3>
                    </Row>

                    <Row justify="center" align="middle" style={{ flexDirection: 'column' }}>
                        <h3 style={{ fontWeight: "normal" }}>
                            Get the app.
                        </h3>
                        <Space size={16}>
                            <img src={AppleStore} alt='appstore' style={{ height: '40px' }} />
                            <img src={ChPlay} alt='chplay' style={{ height: '40px' }} />
                        </Space>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default Login;