import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product/Product'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'


const HomeScreen = props => {

    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])


    return (
        <>
            <h1>Latest Products</h1>
            {loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3> :
                <Row>
                    {products.map(product => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>}

        </>
    )
}

// HomeScreen.propTypes = {
//     products: PropTypes.array.isRequired,
// }

export default HomeScreen
