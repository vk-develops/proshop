import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import Rating from '../Components/Rating';

const ProductScreen = () => {

    const [products, setProducts] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get(`http://localhost:3000/api/products/${id}`);
            setProducts(data);
        }

        fetchProducts();
    }, []);

  
    if (!products) return null;

    return (
        <>
            <Link to="/">
                <span className='btn btn-light my-3 p-2 rounded-md shadow-md'><i className='fas fa-arrow-left'></i>   Back to Home Page</span>
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={products.image} alt={products.image} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{products.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={products.rating} text={`${products.numReviews} reviews`} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price $: {products.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {products.description}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>{products.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                    {products.countInStok > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button className='btn-block' type='button'> add to Cart </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </>
    );
}

export default ProductScreen;