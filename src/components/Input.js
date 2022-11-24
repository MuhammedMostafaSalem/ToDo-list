import React , {useState} from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Input({onAddItem , data}) {
    const [plan , setPlan] = useState('')

    // to push to data arr
    const addNewItem=()=> {
        data.push( {id:Math.random() , list:plan} );
        setPlan('')
        onAddItem();
        console.log(data);
    }
    
    return (
        <Row className='d-flex justify-content-center mb-3'>
            <Col sm='10'>
                <Form.Control onChange={(e)=> setPlan(e.target.value)} value={plan} type="text" placeholder="enter" className='formImput' />
            </Col>
            <Col sm='2'>
                <Button onClick={addNewItem} variant="primary" type="submit" className='submit'>
                    <FontAwesomeIcon icon={faPlus} className='faPlus' />
                </Button>
            </Col>
        </Row>
    )
}

export default Input