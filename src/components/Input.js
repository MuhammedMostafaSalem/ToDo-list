import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Input() {
    return (
        <Row className='d-flex justify-content-center mb-3'>
            <Col sm='10'>
                <Form.Control type="text" placeholder="enter" className='formImput' />
            </Col>
            <Col sm='2'>
                <Button variant="primary" type="submit" className='submit'>
                    <FontAwesomeIcon icon={faPlus} className='faPlus' />
                </Button>
            </Col>
        </Row>
    )
}

export default Input