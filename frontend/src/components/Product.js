import React from 'react'
// importing link and using that as opposed to the a tag because a reloads the page
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

// import Rating Component
import Rating from '../components/Rating'

// Product component that takes in prd as a prop
const Product = ({ prd }) => {
    return (
        // creates a card for each product
        <Card className="my-3 p-3 rounded">
            {/* href shows the id for each product */}
            <Link to={`/product/${prd._id}`}>
                {/* image displayed on the top */}
                <Card.Img src={prd.image} variant="top" />
            </Link>

            {/* displays other relevant info about the products */}
            <Card.Body>
                <Link to={`/product/${prd._id}`}>
                    <Card.Title as="div">
                        <strong>{prd.name}</strong>
                    </Card.Title>
                </Link>

                {/* displays the review for each product */}
                {/* each text is brought in as a div so that it can be viewed as a separate form of data */}
                <Card.Text as="div">
                    {/* <div className="my-3">
                        {prd.rating} from {prd.numReviews} reviews
                    </div> */}

                    {/* Rating component will take in 2 props, the rating and the number of reviews in the original component */}
                    <Rating value={prd.rating} text={`${prd.numReviews} reviews`} color="red" />
                </Card.Text>

                {/* displays the price for each product */}
                {/* brings in the info from file as h3 tag */}
                <Card.Text as="h3">
                    <div className="my-3">
                        <strong> $ {prd.price}</strong>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product
