import React from 'react';
import { Card } from 'antd';
import apps from './data.json';
const { Meta } = Card;


const RedApoyo = () => {
    return (
        <div style={{ with: '100%', display: 'flex', gap: '30px' }} >
            <div style={{ width: '10%' }}>
                <Card
                    title="Filtros - RedApoyo"
                    bordered={false}
                    style={{
                        width: 220,
                        boxShadow: ' 0px 0px 59px -24px rgba(194,160,234,0.82)'
                    }}
                >
                    <p>Cuidad:</p>
                    <ul style={{ listStyle: 'none' }}>
                        <li><input type="checkbox" id="item1" name="item1" value="value1" style={{ marginRight: '10px' }} /><label for="item1">Bogotá</label></li>
                        <li><input type="checkbox" id="item2" name="item2" value="value2" style={{ marginRight: '10px' }} /><label for="item2">Medellín</label></li>
                        <li><input type="checkbox" id="item3" name="item3" value="value3" style={{ marginRight: '10px' }} /><label for="item3">Cartagena</label></li>
                        <li><input type="checkbox" id="item4" name="item4" value="value4" style={{ marginRight: '10px' }} /><label for="item4">Cali</label></li>
                        <li><input type="checkbox" id="item5" name="item5" value="value5" style={{ marginRight: '10px' }} /><label for="item5">Santa Marta</label></li>
                        <li><input type="checkbox" id="item6" name="item6" value="value6" style={{ marginRight: '10px' }} /><label for="item6">Barranquilla</label></li>
                        <li><input type="checkbox" id="item7" name="item7" value="value7" style={{ marginRight: '10px' }} /><label for="item7">Villavicencio</label></li>
                        <li><input type="checkbox" id="item8" name="item8" value="value8" style={{ marginRight: '10px' }} /><label for="item8">San Gil</label></li>
                    </ul>
                    <hr />
                    <p>Grupos de apoyo:</p>
                    <ul style={{ listStyle: 'none' }}>
                        <li><input type="checkbox" id="item1" name="item1" value="value1" style={{ marginRight: '10px' }} /><label for="item1">Facebook</label></li>
                        <li><input type="checkbox" id="item2" name="item2" value="value2" style={{ marginRight: '10px' }} /><label for="item2">Youtube</label></li>
                        <li><input type="checkbox" id="item3" name="item3" value="value3" style={{ marginRight: '10px' }} /><label for="item3">Whatsapp</label></li>
                        <li><input type="checkbox" id="item4" name="item4" value="value4" style={{ marginRight: '10px' }} /><label for="item4">Instagram</label></li>
                        <li><input type="checkbox" id="item5" name="item5" value="value5" style={{ marginRight: '10px' }} /><label for="item5">WeChat</label></li>
                        <li><input type="checkbox" id="item6" name="item6" value="value6" style={{ marginRight: '10px' }} /><label for="item6">TikTok</label></li>
                        <li><input type="checkbox" id="item7" name="item7" value="value7" style={{ marginRight: '10px' }} /><label for="item7">Telegram</label></li>
                    </ul>
                    <hr />
                    
                </Card>
            </div>
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
                            boxShadow: ' 0px 0px 59px -24px rgba(194,160,234,0.82)'

                        }}
                        cover={<img alt="example" src={app.img} style={{ width: '100px', height: '100px', margin: 'auto', objectFit: 'cover' }} />}
                    >
                        <Meta title={app.name} description={app.description} />
                    </Card>
                ))}
            </div>

        </div>
    );
};

export default RedApoyo;