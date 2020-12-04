import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Card, Button, ListGroup } from 'react-bootstrap'
import Rating from '../components/Product/Rating'
import products from '../products'
const Product = ({ match }) => {
    const product = products.find(product => product._id === match.params.id)

    return (
        <>
            <Link to='/' className='btn btn-dark my-3' >Go Back</Link>
        </>
    )
}

Product.propTypes = {

}

export default Product
