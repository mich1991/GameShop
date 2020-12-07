import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Row, Col, Image, Card, Button, ListGroup, Form } from 'react-bootstrap'
import Rating from '../components/Product/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const Product = ({ history, match }) => {


    const [qty, setQty] = useState(1)

    const dispatch = useDispatch()

    const productDetails = useSelector(state => state.productDetails)
    const { product, error, loading } = productDetails


    useEffect(() => {
        dispatch(listProductDetails(match.params.id))
    }, [dispatch, match.params.id])

    const addToCardHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    return (
        <>
            <Link to='/' className='btn btn-warning my-3' >Go Back</Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
                    </Col>
                    <Col md={3}>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <h3>{product.name}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Rating rate={product.rating} reviews={product.numReviews} />
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <h4><strong> Price:</strong> {product.price} $</h4>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <p><strong> Description:</strong> {product.description}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col><strong>{product.price}$</strong></Col>
                                    </Row>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Status:</Col>
                                        <Col>
                                            {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                        </Col>
                                    </Row>
                                </ListGroup.Item>

                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>
                                                Qty
                                            </Col>
                                            <Col>
                                                <Form.Control as='select' value={qty} onChange={e => {
                                                    setQty(e.target.value)
                                                }}>
                                                    {
                                                        [...Array(product.countInStock).keys()].map(x => (
                                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                        ))
                                                    }
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Button
                                        onClick={addToCardHandler}
                                        className='btn-block btn-success'
                                        type='button'
                                        disabled={product.countInStock <= 0} >
                                        Add To Cart
                                </Button>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            }

        </>
    )
}

Product.propTypes = {
    listProductDetails: PropTypes.func.isRequired,
}

export default Product
