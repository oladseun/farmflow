import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DashboardOutlined,
    TeamOutlined,
    CheckSquareOutlined,
    DollarOutlined,
    MedicineBoxOutlined,
    InboxOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { Logo } from '../../../../components/common/Logo';

const { Sider } = Layout;

export const AppSidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const menuItems = [
        {
            key: '/dashboard',
            icon: <DashboardOutlined />,
            label: 'Dashboard',
            onClick: () => navigate('/dashboard'),
        },
        {
            key: '/flocks',
            icon: <TeamOutlined />,
            label: 'Flocks',
            onClick: () => navigate('/flocks'),
        },
        {
            key: '/tasks',
            icon: <CheckSquareOutlined />,
            label: 'Tasks',
            onClick: () => navigate('/tasks'),
        },
        {
            key: '/expenses',
            icon: <DollarOutlined />,
            label: 'Expenses',
            onClick: () => navigate('/expenses'),
        },
        {
            key: '/health',
            icon: <MedicineBoxOutlined />,
            label: 'Health Records',
            onClick: () => navigate('/health'),
        },
        {
            key: '/inventory',
            icon: <InboxOutlined />,
            label: 'Inventory',
            onClick: () => navigate('/inventory'),
        },
    ];

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={setCollapsed}
            style={{
                background: '#fff',
                borderRight: '1px solid #f0f0f0',
            }}
        >
            <div className="flex items-center justify-center py-6 border-b border-gray-100">
                <Logo variant={collapsed ? 'icon' : 'full'} />
            </div>
            <Menu
                mode="inline"
                selectedKeys={[location.pathname]}
                items={menuItems}
                style={{
                    height: '100%',
                    borderRight: 0,
                    paddingTop: 16,
                }}
            />
        </Sider>
    );
};

export default AppSidebar;
