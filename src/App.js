import { useState } from 'react';
import {Button, Col, Container, Row} from 'react-bootstrap'
import Input from './components/Input';
import List from './components/List';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [data , setData] = useState([]);

  // to add new item
  const addItem=()=> {
    localStorage.setItem('items' , JSON.stringify([...data]))
    setData([...data])

    notify('Added Successfully' , 'success')
  }

  // to delete one item
  const deleteItem=(item)=> {
    localStorage.setItem('items' , JSON.stringify([...item]))
    setData([...item]);

    if(item.length <= 0) {
      deleteAllItems();
    }

    notify('removed Successfully' , 'Success')
  }

  // to delete all items
  const deleteAllItems=()=> {
    localStorage.removeItem('items')
    data.splice(0, data.length)
    setData([])

    notify('All removed successfully' , 'Success')
  }


  // to push notifaction
  const notify=(message , type)=> {
    if(type === 'Error') {
      toast.error(message)
    }
    else if(type === 'Success') {
      toast.success(message)
    }
  }


  return (
    <div className="App">
      <Container className='p-5'>
        <Row>
          <Col sm='12'>
            <div className='text-capitalize text-center fw-bold fs-3 py-4'>What's your plan today?</div>
          </Col>
          <Col sm='12'>
            <Input onAddItem={addItem} data={data} notify={notify} />
            <List data={data} deleteItem={deleteItem} />
            {
              localStorage.getItem('items') != null ? (<Button onClick={deleteAllItems} className='daleteAll fw-bold mt-3'>Delete All</Button>) : null
            }
          </Col>
        </Row>
      </Container>
      <ToastContainer/>
    </div>
  );
}

export default App;
