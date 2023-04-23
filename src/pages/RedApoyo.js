import { Carousel, Col, Row, Space } from 'antd';
import img1 from '../assets/baner1.jpg'
import img2 from '../assets/baner2.jpg'
import img3 from '../assets/baner3.jpg'
import { Card } from 'antd';
const { Meta } = Card;
const contentStyle = {

    width: '50%',
    color: 'red',


    background: '#364d79',
};

const RedApoyo = () => {
    return (
        <div style={{ margin: '0 auto' }}>
            <Space
                direction="vertical"
                size="middle"
                style={{
                    display: 'flex',
                }}
            >
                <div style={{ textAlign: 'center', width: '100%',backgroundColor:'#E9BBF0', paddingLeft:'18rem' }}>
                    <Carousel autoplay >
                        <div>
                            <img src={img1} style={contentStyle} alt="Imagen 1" />
                        </div>
                        <div>
                            <img src={img2} style={contentStyle} alt="Imagen 2" />
                        </div>
                        <div>
                            <img src={img3} style={contentStyle} alt="Imagen 3" />
                        </div>
                    </Carousel>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta title="Europe Street beat" description="www.instagram.com" />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Space>
        </div>)
}
export default RedApoyo;