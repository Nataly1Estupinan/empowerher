import { CheckCircleOutlined, ClockCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined, MinusCircleOutlined, PlusOutlined, SyncOutlined } from '@ant-design/icons';
import {
    Button,
    Cascader,
    Checkbox,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    Tag,
    TreeSelect,
    Upload,
} from 'antd';
import { useState } from 'react';
const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const Preferencias = () => {
    const [componentDisabled, setComponentDisabled] = useState(true);
    return (
        <>
            <div style={{ marginBottom: '20px' }}>
                <Tag icon={<CheckCircleOutlined />} color="success">
                    tecnología
                </Tag>
                <Tag icon={<SyncOutlined spin />} color="processing">
                    derechos laborales
                </Tag>
                <Tag icon={<CloseCircleOutlined />} color="error">
                    transporte de mujeres para mujeres
                </Tag>
                <Tag icon={<ExclamationCircleOutlined />} color="warning">
                    bogotá
                </Tag>
                <Tag icon={<ClockCircleOutlined />} color="default">
                    trabajo
                </Tag>
            </div>
            <Form
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"

                style={{
                    maxWidth: 600,
                }}
                
            >

                <Form.Item label="Usuario">
                    <Input />
                </Form.Item>
                <Form.Item label="Edad">
                    <Select>
                        <Select.Option value="demo">Menor de 18</Select.Option>
                        <Select.Option value="demo">18 - 24</Select.Option>
                        <Select.Option value="demo1">25-40</Select.Option>
                        <Select.Option value="demo2">+ 40</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item label="Fecha nacimiento">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Ocupación">
                    <Input />
                </Form.Item>

                <Form.Item label="Foto perfil" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <div>
                            <PlusOutlined />
                            <div
                                style={{
                                    marginTop: 8,
                                }}
                            >
                                Cargar
                            </div>
                        </div>
                    </Upload>
                </Form.Item>
            </Form>
        </>
    );
};
export default () => <Preferencias />;