import React from 'react';
import { Layout } from 'antd';
import { AppHeader } from './AppHeader';
import { AppSidebar } from './AppSidebar';

const { Content } = Layout;

export const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppSidebar />
      <Layout>
        <AppHeader />
        <Content
          style={{
            margin: '24px',
            padding: '24px',
            background: '#f5f5f5',
            borderRadius: '12px',
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
