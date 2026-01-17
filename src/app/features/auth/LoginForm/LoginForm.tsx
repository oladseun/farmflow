import React, { useState } from 'react';
import { Form, Input, Button, Typography, message } from 'antd';
import { MailOutlined, LockOutlined, ArrowRightOutlined, GlobalOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../contexts/AuthContext';
import heroImage from '../../../../assets/hero-login.png';
import { Logo } from '../../../../components/common/Logo';

const { Title, Text, Link } = Typography;

export const LoginForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();
    const navigate = useNavigate();

    const onFinish = async (values: { email: string; password: string }) => {
        setLoading(true);
        const { error } = await signIn(values.email, values.password);
        setLoading(false);

        if (error) {
            message.error(error.message || 'Failed to sign in');
        } else {
            message.success('Welcome back!');
            navigate('/dashboard');
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #e0e7ff 0%, #f0f4ff 100%)',
            padding: '20px'
        }}>
            <div style={{
                width: '100%',
                maxWidth: '1100px',
                background: 'white',
                borderRadius: '32px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                display: 'flex',
                minHeight: '650px',
                border: '3px solid #e5e7eb'
            }}>
                {/* Left Side - Form */}
                <div style={{
                    flex: 1,
                    padding: '60px 50px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}>
                    {/* Header */}
                    <div style={{ marginBottom: 40 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                            <Button
                                type="text"
                                icon={<ArrowLeftOutlined />}
                                onClick={() => navigate('/')}
                                style={{ padding: '4px 8px' }}
                            />
                            <Logo variant='full' />
                        </div>
                        <GlobalOutlined style={{
                            position: 'absolute',
                            top: 30,
                            right: 30,
                            fontSize: 24,
                            color: '#6b7280'
                        }} />
                    </div>

                    <Title level={2} style={{ marginBottom: 8, fontSize: 32, fontWeight: 600 }}>
                        Log in
                    </Title>

                    <Form
                        name="login"
                        onFinish={onFinish}
                        layout="vertical"
                        size="large"
                        style={{ marginTop: 30 }}
                    >
                        <Form.Item
                            label={<span style={{ fontSize: 14, color: '#374151' }}>Email address</span>}
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please enter a valid email!' }
                            ]}
                        >
                            <Input
                                prefix={<MailOutlined style={{ color: '#9ca3af' }} />}
                                placeholder="george@gmail.com"
                                style={{
                                    borderRadius: 12,
                                    padding: '12px 16px',
                                    fontSize: 15,
                                    border: '1.5px solid #e5e7eb'
                                }}
                            />
                        </Form.Item>

                        <Form.Item
                            label={<span style={{ fontSize: 14, color: '#374151' }}>Password</span>}
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined style={{ color: '#9ca3af' }} />}
                                placeholder="••••••••"
                                style={{
                                    borderRadius: 12,
                                    padding: '12px 16px',
                                    fontSize: 15,
                                    border: '1.5px solid #e5e7eb'
                                }}
                            />
                        </Form.Item>

                        <div style={{ textAlign: 'right', marginBottom: 24 }}>
                            <Link style={{ fontSize: 14, color: '#6b7280' }}>
                                Forgot password?
                            </Link>
                        </div>

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                block
                                loading={loading}
                                icon={<ArrowRightOutlined />}
                                iconPosition="end"
                                style={{
                                    height: 52,
                                    borderRadius: 12,
                                    fontSize: 16,
                                    fontWeight: 500,
                                    background: '#0f172a',
                                    border: 'none',
                                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.3)'
                                }}
                            >
                                Log in
                            </Button>
                        </Form.Item>

                        <div style={{ textAlign: 'center', marginTop: 24 }}>
                            <Text style={{ color: '#6b7280', fontSize: 14 }}>
                                Don't Have an account?
                            </Text>
                            <br />
                            <Button
                                type="default"
                                onClick={() => navigate('/signup')}
                                style={{
                                    marginTop: 12,
                                    width: '100%',
                                    height: 52,
                                    borderRadius: 12,
                                    fontSize: 16,
                                    fontWeight: 500,
                                    border: '1.5px solid #e5e7eb'
                                }}
                            >
                                Sign Up
                            </Button>
                        </div>
                    </Form>
                </div>

                {/* Right Side - Hero Image */}
                <div style={{
                    flex: 1,
                    background: `linear-gradient(135deg, rgba(6, 182, 212, 0.9) 0%, rgba(59, 130, 246, 0.9) 100%), url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 60,
                    color: 'white',
                    position: 'relative',
                    borderRadius: '28px',
                    margin: 12
                }}>
                    <div style={{
                        textAlign: 'center',
                        zIndex: 1
                    }}>
                        <Title level={1} style={{
                            color: 'white',
                            fontSize: 48,
                            fontWeight: 700,
                            marginBottom: 16,
                            textShadow: '0 2px 20px rgba(0,0,0,0.2)'
                        }}>
                            Trusted by
                        </Title>
                        <Title level={2} style={{
                            color: '#a5f3fc',
                            fontSize: 56,
                            fontWeight: 800,
                            margin: 0,
                            textShadow: '0 2px 20px rgba(0,0,0,0.2)'
                        }}>
                            Over 2K+ Farmers
                        </Title>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
