import { LaptopOutlined, NotificationOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Input, Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
const { Header, Content, Sider } = Layout;
const items1 = ['Inicio', 'Educación', 'Acoso sexual', 'Derechos laborales', 'Apoyo emocional', 'Transporte', 'Red de apoyo'].map((key) => ({
  key,
  label: `${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `${key}`,
    icon: React.createElement(icon),
    label: `${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});

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

        <Menu style={{ paddingLeft: '200px' }} theme="light" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
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
          <Card
            title="Login"
            extra={<a href="#">Crear cuenta</a>}
            style={{
              width: 300,
            }}
          >
            <Input placeholder="Tu nombre de usuario" />
            <Input placeholder="Tu contraseña" />
            
            <Button style={{margin:'1rem', backgroundColor:'#4E3E6D', color:'white'}} loading={loadings[0]} onClick={() => enterLoading(0)}>
            Ingresar
          </Button>
          <div> {<a href="#">Olvidaste la contraseña</a>}</div>
         
          </Card>
          
        </Content>
      </Layout>
    </Layout>
  );
};

export default MyComponent;
