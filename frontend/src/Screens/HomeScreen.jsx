import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Row, Col } from "react-bootstrap";
// import products from '../Products';
import Product from '../Components/Product';

const HomeScreen = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            const { data } = await axios.get("http://localhost:3000/api/products");

            setProducts(data);
        };

        fetchProducts();

    }, []);

    return (
        <>
            <h1>latest products</h1>
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