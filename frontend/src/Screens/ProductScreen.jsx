import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import products from '../Products';
import Rating from '../Components/Rating';

const ProductScreen = () => {

    const { id } = useParams();

    const product = products.find((p) => String(p._id) === id);
  
    if (!product) return null;

    return (
        <>
            <Link to="/">
                <span className='btn btn-light my-3 p-2 rounded-md shadow-md'><i className='fas fa-arrow-left'></i>   Back to Home Page</span>
            </Link>

            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.image} fluid />
                </Col>

                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price $: {product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {product.description}
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
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                    {product.countInStok > 0 ? 'In Stock' : 'Out of Stock'}
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