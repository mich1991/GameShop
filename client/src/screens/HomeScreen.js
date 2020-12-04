import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product/Product'
import axios from 'axios'
const HomeScreen = props => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await axios.get('/api/products')
                setProducts(products.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts()
    }, [])

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

// HomeScreen.propTypes = {
//     products: PropTypes.array.isRequired,
// }

export default HomeScreen
