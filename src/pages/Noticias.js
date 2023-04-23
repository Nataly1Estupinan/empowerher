import { Card, Carousel, Row } from "antd";
import { Button, Modal } from 'antd';
import { useState } from 'react';
import new1 from '../assets/baner1.jpg';
import new2 from '../assets/baner2.jpg';
import { PlusCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Meta from "antd/es/card/Meta";
import apps from './data.json';

const Noticias = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <> <div style={{textAlign:'center', width:'200px', marginLeft:'900px', paddingBottom:'10px'}}>
            <Link onClick={showModal}>
                <PlusCircleOutlined />Agregar preferencias
            </Link>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
            <Row justify="center">

                <Carousel autoplay style={{ width: '800px', height: '300px', backgroundColor: '#D672C3' }}>

                    <div>

                        <img style={{ width: '100%' }} src={new1}></img>
                        <div style={{ backgroundColor: '#C2A0EA', borderRadius: '9px', opacity: '0.8', width: '250px', height: '50px', position: 'absolute', top: '320px' }}>
                            <h1 style={{ textAlign: 'center', color: 'black', margin: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Hackatón</h1>
                        </div>

                    </div>
                    <div>
                        <img style={{ width: '100%' }} src={new2}></img>
                        <div style={{ backgroundColor: '#C2A0EA', borderRadius: '9px', opacity: '0.8', width: '250px', height: '50px', position: 'absolute', top: '320px' }}>
                            <h1 style={{ textAlign: 'center', color: 'black', margin: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>FemTech</h1>


                        </div>
                    </div>
                </Carousel>
            </Row>

            <div style={{ with: '100%', display: 'flex', gap: '30px', marginTop:'130px' }} >
           
            <div style={{ width: '80%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', margin: 'auto' }}>
                {apps.map((app) => (
                    <Card
                        key={app.id}
                        hoverable
                        style={{
                            width: '30%',
                            display: 'flex',
                            marginBottom: '30px',
                            alignItems: 'center',
                            boxShadow:' 0px 0px 59px -24px rgba(194,160,234,0.82)'
                        }}
                        cover={<img alt="example" src={app.img} style={{ width: '100px', height: '100px', margin: 'auto', objectFit: 'cover' }} />}
                    >
                        <Meta title={app.name} description={app.description} />
                    </Card>
                ))}
            </div>

        </div>
        </>
    );
}
export default Noticias;