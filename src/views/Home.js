import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() 
{
    const [modalState, setModalState]=useState(0);



    const increModalState = () => 
    {
        setModalState(modalState+1)
    }
    const decreModalState = () => 
    {
        setModalState(modalState-1)
    }


    return(
    <body className='mainBackground'>
    <Container fluid>
        <Row className="firstRow">
        <div>
            <Col className="firstCol">
                <Stack direction="horizontal" gap={3}>
                    <div>
                        <Button variant="primary" onClick={()=> setModalState(1)}>
                            Launch demo modal
                        </Button>
                    </div>
                    <div>
                        <Button variant="primary" onClick={()=> setModalState(2)}>
                            Launch demo modal
                        </Button>
                    </div>
                    <div>
                        <Button variant="primary" onClick={()=> setModalState(3)}>
                            Launch demo modal
                        </Button>
                    </div>
                </Stack>
            </Col>
            
            </div>
        </Row>

        <Modal show={modalState===1} onHide={()=> setModalState(0)} dialogClassName="modal-90w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you are reading this text in a modal!
                </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={()=> setModalState(0)}>
                Close
            </Button>
            <Button variant="primary" onClick={()=> setModalState(0)}>
                Save Changes
            </Button>
            </Modal.Footer>
      </Modal>

    </Container>
    </body>);
}

export default Home;