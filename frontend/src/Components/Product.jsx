import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating';

const Product = ({ productData }) => {
    return (
        <Card className='my-3 p-3 rounded'>
            <Link to={`/product/${productData._id}`}>
                <Card.Img src={productData.image} variant='top' />
            </Link>

            <Card.Body>
                <Link to={`/product/${productData._id}`}>
                    <Card.Title as='div'>
                        <strong>{productData.name}</strong>
                    </Card.Title>
                </Link>
                
                <Card.Text as='div'>
                    <Rating value={productData.rating} text={`${productData.numReviews} reviews`} />
                </Card.Text>

                <Card.Text as='h3'>
                    ${productData.price}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Product;