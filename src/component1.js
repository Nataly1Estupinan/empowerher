
import React from 'react';
import { LaptopOutlined, NotificationOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Input, Layout, Menu, theme } from 'antd';
const { Header, Content, Sider } = Layout;
const items1 = ['Inicio', 'Educación', 'Acoso sexual', 'Derechos laborales', 'Apoyo emocional', 'Transporte', 'Red de apoyo'].map((key) => ({
  key,
  label: `${key}`,
}));

const Component1 = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();
 
  return (
    <Layout>
     
        

        {/* <Menu style={{ paddingLeft: '200px' }} theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
      
      <Layout>

        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        ><p>soy el componente 1</p>
          </Content>
      </Layout>
    </Layout>
  );
};

export default Component1;
