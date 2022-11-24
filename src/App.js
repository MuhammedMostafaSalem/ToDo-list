import { useState } from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap'
import Input from './components/Input';
import List from './components/List';

function App() {
  const [data , setData] = useState([]);

  // to add new item
  const addItem=()=> {
    localStorage.setItem('items' , JSON.stringify([...data]))
    setData([...data])
  }

  // to delete one item
  const deleteItem=(item)=> {
    localStorage.setItem('items' , JSON.stringify([...item]))
    setData([...item]);

    if(item.length <= 0) {
      deleteAllItems();
    }
  }

  // to delete all items
  const deleteAllItems=()=> {
    localStorage.removeItem('items')
    data.splice(0, data.length)
    setData([])
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
            <List data={data} deleteItem={deleteItem} />
            {
              localStorage.getItem('items') != null ? (<Button onClick={deleteAllItems} className='daleteAll fw-bold mt-3'>Delete All</Button>) : null
            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
