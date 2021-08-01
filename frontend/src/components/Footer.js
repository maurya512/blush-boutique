import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    {/* center the text in reference to the y axis */}
                    <Col className="text-center py-3">
                        Copyright &copy; Blush Boutique 2021
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
