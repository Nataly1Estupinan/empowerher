import React from 'react';
import { Card } from 'antd';
import apps from './data.json';
const { Meta } = Card;


const Acoso = () => {
    return (
        <div style={{ with: '100%', display: 'flex', gap: '30px' }} >
            <div style={{ width: '10%' }}>
                <Card
                    title="Filtros - Acoso sexual"
                    bordered={false}
                    style={{
                        width: 220,
                        boxShadow:' 0px 0px 59px -24px rgba(194,160,234,0.82)'
                    }}
                >
                    <ul style={{ listStyle: 'none' }}>
                        <li><input type="checkbox" id="item3" name="item3" value="value3" style={{ marginRight: '10px' }} /><label for="item3">Fundaciones</label></li>
                        <li><input type="checkbox" id="item4" name="item4" value="value4" style={{ marginRight: '10px' }} /><label for="item4">ONG</label></li>
                        <li><input type="checkbox" id="item5" name="item5" value="value5" style={{ marginRight: '10px' }} /><label for="item5">Abogados</label></li>
                        <li><input type="checkbox" id="item6" name="item6" value="value6" style={{ marginRight: '10px' }} /><label for="item6">Redes de apoyo</label></li>
                        <li><input type="checkbox" id="item7" name="item6" value="value7" style={{ marginRight: '10px' }} /><label for="item7">Psicológia</label></li>

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
                            boxShadow:' 0px 0px 59px -24px rgba(194,160,234,0.82)'

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

export default Acoso;