import { LaptopOutlined, NotificationOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Input, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import LoginRegisterPage from './login';
import Component1 from './component1';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const items1 = ['inicio', 'educacion', 'Acoso sexual', 'Derechos laborales', 'Apoyo emocional', 'Transporte', 'Red de apoyo'].map((key, index) => ({
  key: String(index),
  label: `${key}`,
  link: `/${key.toLowerCase().replace(/\s+/g, '-')}`, // Genera la ruta en función del nombre del item
}));

const MyComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <Layout>
      <Header className="header">
        <div className="logo" />

        <Menu style={{ paddingLeft: '200px' }} 
        theme="light" mode="horizontal" 
        defaultSelectedKeys={['2']} 
        >
           {items1.map((item) => (
        <Menu.Item key={item.key}>
          <Link to={item.link}>{item.label}</Link>
        </Menu.Item>
      ))}
        </Menu>
      </Header>
      <Layout>

        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
         
          </Content>
      </Layout>
    </Layout>
  );
};

export default MyComponent;
