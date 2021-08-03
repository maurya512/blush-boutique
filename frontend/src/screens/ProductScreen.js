import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'

// import components
import Rating from '../components/Rating'
import products from '../products'

// ProductScreen component
const ProductScreen = ({ match }) => {
    // use a higher order find method in array that returns a product whose product id === id found in the url and stores in a variable
    const product = products.find(p => p._id === match.params.id)
    return (
        <>
            {/* {product.name} */}
            {/* a button that redirects user back to the homepage */}
            <Link className="btn btn-dark my-3" to="/">Go Back</Link>
            <Row>
                {/* grabs the image from id */}
                <Col md={6}>
                    {/* fluid prevents the image from overflowing outside of the container */}
                    <Image src={product.image} alt={product.name} fluid></Image>
                </Col>
                {/* grabs other info from the product data file */}
                <Col md={3}>
                    {/* lists the name of the product */}
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        {/* lists the rating of the product */}
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item>
                        {/* lists the price of the product */}
                        <ListGroup.Item>
                            Price: $ {product.price}
                        </ListGroup.Item>
                        {/* lists the description of the product */}
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                {/* Column to have add to cart functionality */}
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            {/* price info for the cart */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                    </Col>
                                    <Col>
                                        <strong>$ {product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {/* display the status of the product */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {/* add to cart button */}
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    {/* add to cart button that is disabled if the items not in stock */}
                                    <Button className="btn-block" type="button" disabled={product.countInStock === 0}>Add to Cart</Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
