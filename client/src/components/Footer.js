import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
// import PropTypes from 'prop-types'

const Footer = props => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col className='text-center py-3' >
                        Copyright &copy; GameShop
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

// Footer.propTypes = {

// }

export default Footer
