import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import products from '../products'

const HomeScreen = () => {
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
