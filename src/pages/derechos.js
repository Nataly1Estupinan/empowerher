import React from 'react';
import { Card } from 'antd';
import apps from './data.json';
import { Link } from 'react-router-dom';
const { Meta } = Card;



const Derechos = () => {
    return (

        <div style={{ with: '100%', display: 'flex', gap: '30px' }} >

            <div style={{ width: '10%' }}>
                <Card
                    title="Filtros - Derechos laborales"
                    bordered={false}
                    style={{
                        width: 220,
                        boxShadow: ' 0px 0px 59px -24px rgba(194,160,234,0.82)'
                    }}
                >
                    <ul style={{ listStyle: 'none' }}>
                        <li><label for="item3">Abogados</label></li>
                        <hr />
                        <li><input type="checkbox" id="item4" name="item4" value="value4" style={{ marginRight: '10px' }} /><label for="item4">Sec. Público</label></li>
                        <li><input type="checkbox" id="item5" name="item5" value="value5" style={{ marginRight: '10px' }} /><label for="item5">Sec. Privado</label></li>
                    </ul>
                </Card>
            </div>
            <div style={{ width: '80%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap', margin: 'auto' }}>
                {apps.map((app) => (
                    <Card
                        key={app.id}
                        hoverable
                        title
                        style={{
                            width: '30%',
                            display: 'flex',
                            marginBottom: '30px',
                            alignItems: 'center',
                            boxShadow: ' 0px 0px 59px -24px rgba(194,160,234,0.82)'
                        }}
                        cover={
                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Link to={app.link} target="_blank" rel="noopener noreferrer">
                                    <img
                                        alt="example"
                                        src={app.img}
                                        style={{ width: '100px', height: '100px', margin: 'auto', objectFit: 'cover' }}
                                    />
                                </Link>
                            </div>
                        }
                    >
                        <Meta title={app.name} description={app.description} />
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Derechos;