import { useState } from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap'
import Input from './components/Input';
import List from './components/List';

function App() {
  const [data , setData] = useState([]);

  // to add new item
  const addItem=()=> {
    setData([...data])
  }


  return (
    <div className="App">
      <Container className='p-5'>
        <Row>
          <Col sm='12'>
            <div className='text-capitalize text-center fw-bold fs-3 py-4'>What's your plan today?</div>
          </Col>
          <Col sm='12'>
            <Input onAddItem={addItem} data={data} />
            <List data={data} />
            {
              data.length >= 2 ? (<Button className='daleteAll fw-bold mt-3'>Delete All</Button>) : null
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
