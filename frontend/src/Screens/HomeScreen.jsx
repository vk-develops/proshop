import React from 'react';
import { Row, Col } from "react-bootstrap";
import products from '../Products';
import Product from '../Components/Product';

const HomeScreen = () => {
    return (
        <>
            <Row>
                {products.map((item) => (
                    <Col sm={12} md={6} lg={4} xl={3} >
                        <Product productData={item} />
                    </Col>
                ))}
            </Row>
        </>
    );
}

export default HomeScreen;