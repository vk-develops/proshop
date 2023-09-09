import React from 'react';
import { Row, Col } from "react-bootstrap";
import products from '../Products';

const HomeScreen = () => {
    return (
        <>
            <Row>
                {products.map((item) => (
                    <Col sm={12} md={6} lg={4} xl={3} >
                        <h3>{item.name}</h3>
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default HomeScreen;