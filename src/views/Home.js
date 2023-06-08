import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';


function Home() 
{
    const [modalState, setModalState]=useState(0);



    const increModalState = () => 
    {
        if(modalState<=2)
        {
            setModalState(modalState+1)
        }
    }
    const decreModalState = () => 
    {
        if(modalState>=2)
        {
            setModalState(modalState-1)
        }
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
            <Container className='buttonBox'>
            <Button variant="outline-primary" onClick={decreModalState} disabled>
                <ArrowLeft color="white" size={48} />
            </Button>
            <Button variant="outline-primary" onClick={increModalState}>
                <ArrowRight color="white" size={48}/>
            </Button>
            </Container>
            </Modal.Footer>
      </Modal>
      <Modal show={modalState===2} onHide={()=> setModalState(0)} dialogClassName="modal-90w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you are reading this text in a modal 2!
                </Modal.Body>
            <Modal.Footer>
            <Container className='buttonBox'>
            <Button variant="outline-primary" onClick={decreModalState}>
                <ArrowLeft color="white" size={48} />
            </Button>
            <Button variant="outline-primary" onClick={increModalState}>
                <ArrowRight color="white" size={48}/>
            </Button>
            </Container>
            </Modal.Footer>
      </Modal>
      <Modal show={modalState===3} onHide={()=> setModalState(0)} dialogClassName="modal-90w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you are reading this text in a modal 3!
                </Modal.Body>
            <Modal.Footer>
            <Container className='buttonBox'>
            <Button variant="outline-primary" onClick={decreModalState}>
                <ArrowLeft color="white" size={48} />
            </Button>
            <Button variant="outline-primary" onClick={increModalState} disabled>
                <ArrowRight color="white" size={48}/>
            </Button>
            </Container>
            </Modal.Footer>
      </Modal>

    </Container>
    </body>);
}

export default Home;