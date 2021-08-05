import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import axios from 'axios'
// import products from '../products'

const HomeScreen = () => {
    // initial state, updated state = default
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products')

            setProducts(data)
        }

        fetchProducts()
    }, [])

    return (
        <>
            <h1>
                Latest Products
            </h1>
            <Row>
                {/* maps through the list of products and accesses them individually */}
                {products.map(product => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        {/* component that takes in a prop prd that encompasses the entire product file */}
                        <Product prd={product} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default HomeScreen
