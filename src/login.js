import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import imgInicio from './assets/imgInicio.jpg'
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';

const RegisterForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (

    <>

      <Form
        form={form}
        name="register-form"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          name="usuario"
          label="Usuario"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa tu usuario!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Contraseña"
          rules={[
            {
              required: true,
              message: 'Por favor ingresa tu contraseña!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirmar contraseña"
          dependencies={['password']}
          hasFeedback
          rules={[
            {
              required: true,
              message: 'Por favor confirma tu contraseña!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error('Las contraseñas no coinciden!')
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
            {
              validator: (_, value) =>
                value
                  ? Promise.resolve()
                  : Promise.reject(new Error('Should accept agreement')),
            },
          ]}
        >
          <Checkbox>
            He leído y acepto el <a href="/">acuerdo</a>
          </Checkbox>
        </Form.Item>

        <Form.Item >
          <Button style={{ backgroundColor: '#4E2F48' }} type="primary" htmlType="submit" >
            Registrar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

const LoginForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <Form
      form={form}
      name="login-form"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="usuario"
        label="Usuario"
        rules={[
          {
            required: true,
            message: 'Por favor escribe tu usuario!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Contraseña"
        rules={[
          {
            required: true,
            message: 'Por favor ingresa tu contraseña!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item >
        <Button style={{ backgroundColor: '#4E2F48' }} type="primary" htmlType="submit">
          <Link to="/educacion" style={{ color: 'white' }}>
            Ingresar
          </Link>
        </Button>
      </Form.Item>
    </Form>
  );
};

const LoginRegisterPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleToggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: '10px',
        }}>
        <div style={{ width: '50%', paddingRight: '3rem' }}>
          <img src={imgInicio}
            style={{ width: '100%', height: '80vh', borderRadius: '40px', objectFit: 'cover' }}></img>
        </div>
        <div style={{ width: '40%' }}>
          <div style={{ margin: 'auto', top: '60px', display: 'flex', justifyContent: 'center' }}>
            <img src={logo} style={{ width: '30%' }}></img>
          </div>
          <Card
            style={{
              width: '100%',
              height: '300px;',
              boxShadow: '0px 0px 400px 52px rgba(194,160,234,0.82)',

            }}>
            {isLoginForm ? <LoginForm /> : <RegisterForm />}
            <Button onClick={handleToggleForm}>
              {isLoginForm ? 'Registrar' : 'Ingresar'}
            </Button>
          </Card>
        </div>
      </div>
    </div >
  );
};

export default LoginRegisterPage;
