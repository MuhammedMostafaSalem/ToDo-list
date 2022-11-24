import {Button, Col, Container, Row} from 'react-bootstrap'
import Input from './components/Input';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <Container className='p-5'>
        <Row>
          <Col sm='12'>
            <div className='text-capitalize text-center fw-bold fs-3 py-4'>What's your plan today?</div>
          </Col>
          <Col sm='12'>
            <Input/>
            <List/>
            <Button className='daleteAll fw-bold mt-3'>Delete All</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
