import React from 'react'
import PropTypes from 'prop-types'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <Card className='my-3 p-3 rounded' >
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} variant='top' >
                </Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>
                <Card.Text as='div'>
                    <Rating rate={product.rating} reviews={product.numReviews} />
                </Card.Text>
                <Card.Text as='h3'>{product.price} </Card.Text>
            </Card.Body>
        </Card>

    )
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
}

export default Product
