import React from 'react';
import { Typography, Card, Row, Col, Statistic } from 'antd';
import {
    TeamOutlined,
    CheckCircleOutlined,
    DollarOutlined,
    AlertOutlined,
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

export const DashboardPage: React.FC = () => {
    return (
        <div>
            <div style={{ marginBottom: 24 }}>
                <Title level={2} style={{ marginBottom: 8 }}>
                    Welcome to FarmFlow! 🌾
                </Title>
                <Paragraph type="secondary" style={{ fontSize: 16 }}>
                    Here's an overview of your farm operations
                </Paragraph>
            </div>

            {/* Stats Cards */}
            <Row gutter={[16, 16]} style={{ marginBottom: 24 }}>
                <Col xs={24} sm={12} lg={6}>
                    <Card bordered={false} style={{ borderRadius: 12 }}>
                        <Statistic
                            title="Total Animals"
                            value={0}
                            prefix={<TeamOutlined style={{ color: '#667eea' }} />}
                            valueStyle={{ color: '#667eea' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card bordered={false} style={{ borderRadius: 12 }}>
                        <Statistic
                            title="Tasks Today"
                            value={0}
                            prefix={<CheckCircleOutlined style={{ color: '#10b981' }} />}
                            valueStyle={{ color: '#10b981' }}
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card bordered={false} style={{ borderRadius: 12 }}>
                        <Statistic
                            title="Monthly Expenses"
                            value={0}
                            prefix={<DollarOutlined style={{ color: '#f59e0b' }} />}
                            valueStyle={{ color: '#f59e0b' }}
                            suffix="₦"
                        />
                    </Card>
                </Col>
                <Col xs={24} sm={12} lg={6}>
                    <Card bordered={false} style={{ borderRadius: 12 }}>
                        <Statistic
                            title="Alerts"
                            value={0}
                            prefix={<AlertOutlined style={{ color: '#ef4444' }} />}
                            valueStyle={{ color: '#ef4444' }}
                        />
                    </Card>
                </Col>
            </Row>

            {/* Quick Actions */}
            <Row gutter={[16, 16]}>
                <Col xs={24} lg={12}>
                    <Card
                        title="Recent Activity"
                        bordered={false}
                        style={{ borderRadius: 12, height: '100%' }}
                    >
                        <Paragraph type="secondary">
                            No recent activity yet. Start by adding your first flock!
                        </Paragraph>
                    </Card>
                </Col>
                <Col xs={24} lg={12}>
                    <Card
                        title="Quick Actions"
                        bordered={false}
                        style={{ borderRadius: 12, height: '100%' }}
                    >
                        <Paragraph type="secondary">
                            • Add a new flock<br />
                            • Create a task<br />
                            • Log an expense<br />
                            • Record health data
                        </Paragraph>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DashboardPage;
