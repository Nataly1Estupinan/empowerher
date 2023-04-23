import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Card } from 'antd';

const RegisterForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
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
        <Button type="primary" htmlType="submit">
          Registrar
        </Button>
      </Form.Item>
    </Form>
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
        <Button type="primary" htmlType="submit">
          Ingresar
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}>
      <Card
        style={{
          width: 300,
        }}>
        {isLoginForm ? <LoginForm /> : <RegisterForm />}
        <Button onClick={handleToggleForm}>
          {isLoginForm ? 'Registrar' : 'Ingresar'}
        </Button>
      </Card>
    </div>
  );
};

export default LoginRegisterPage;
