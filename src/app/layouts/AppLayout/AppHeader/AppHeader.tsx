import React from 'react';
import { Layout, Menu, Avatar, Dropdown, Typography, Space } from 'antd';
import {
    LogoutOutlined,
    UserOutlined,
    SettingOutlined,
    BellOutlined
} from '@ant-design/icons';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const { Header } = Layout;
const { Text } = Typography;

export const AppHeader: React.FC = () => {
    const { user, signOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut();
        navigate('/login');
    };

    const userMenuItems = [
        {
            key: 'profile',
            icon: <UserOutlined />,
            label: 'Profile',
            onClick: () => navigate('/profile'),
        },
        {
            key: 'settings',
            icon: <SettingOutlined />,
            label: 'Settings',
            onClick: () => navigate('/settings'),
        },
        {
            type: 'divider' as const,
        },
        {
            key: 'logout',
            icon: <LogoutOutlined />,
            label: 'Logout',
            danger: true,
            onClick: handleLogout,
        },
    ];

    return (
        <Header
            style={{
                background: '#fff',
                padding: '0 24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid #f0f0f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
        >
            {/* Logo and Title */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                    fontSize: 24,
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                }}>
                    🌾 FarmFlow
                </div>
            </div>

            {/* Right Side - Notifications and User Menu */}
            <Space size="large">
                {/* Notifications */}
                <BellOutlined
                    style={{
                        fontSize: 20,
                        cursor: 'pointer',
                        color: '#6b7280'
                    }}
                />

                {/* User Dropdown */}
                <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        cursor: 'pointer',
                        padding: '8px 12px',
                        borderRadius: 8,
                        transition: 'background 0.3s',
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.background = '#f9fafb'}
                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                    >
                        <Avatar
                            style={{
                                backgroundColor: '#667eea',
                                cursor: 'pointer'
                            }}
                            icon={<UserOutlined />}
                        />
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                            <Text strong style={{ fontSize: 14 }}>
                                {user?.email?.split('@')[0] || 'Farmer'}
                            </Text>
                            <Text type="secondary" style={{ fontSize: 12 }}>
                                Farm Owner
                            </Text>
                        </div>
                    </div>
                </Dropdown>
            </Space>
        </Header>
    );
};

export default AppHeader;
