import React from 'react';
import { Typography } from 'antd';

const { Title } = Typography;

export const DashboardPage: React.FC = () => {
    return (
        <div>
            <Title level={2}>Dashboard</Title>
            <p>Welcome to FarmFlow! Your dashboard will show farm metrics here.</p>
        </div>
    );
};

export default DashboardPage;
