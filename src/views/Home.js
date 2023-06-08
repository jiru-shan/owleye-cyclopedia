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
import Image from 'react-bootstrap/Image';


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

        <Row className="topRow">
            <Col className="firstCol">
                <Stack direction="horizontal">
                    <div className='dividerSmall'></div>
                    <div>
                        <button className="mainButton" onClick={()=> setModalState(4)}>
                            <Image src={'https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-resume-icon-png-image_927259.jpg'} roundedCircle fluid/>
                        </button>
                    </div>
                    <div className='ms-auto '>
                        <button className="mainButton" onClick={()=> setModalState(5)}>
                            <Image src={'./resources/owl-eyes.jpg'} roundedCircle fluid/>
                        </button>
                    </div>
                    <div className='dividerSmall'></div>
                </Stack>
            </Col>
        </Row>

        <Row className="secondRow">
        <div>
            <Col className="firstCol">
                <Stack className="middleButtonStack" direction="horizontal">
                    <div>
                        <button className="mainButton" onClick={()=> setModalState(1)}>
                            <Image src={'./resources/owl-eyes.jpg'} roundedCircle fluid/>
                        </button>
                    </div>
                    <div className='divider'>
                    <hr className='line'></hr>
                    </div>
                    <div>
                        <button className="mainButton" onClick={()=> setModalState(2)}>
                            <Image src={'./resources/owl-eyes.jpg'} roundedCircle fluid/>
                        </button>
                    </div>
                    <div className='divider'>
                    <hr className='line'></hr>
                    </div>
                    <div>
                        <button className="mainButton" onClick={()=> setModalState(3)}>
                        <Image src={'./resources/owl-eyes.jpg'} roundedCircle fluid/>
                        </button>
                    </div>
                </Stack>
            </Col>
            
            </div>
        </Row>

        <Row className="bottomRow">
        <Col className="firstCol">
                <Stack direction="horizontal">
                    <div className='dividerSmall'></div>
                    <div>
                        <button className="mainButton" onClick={()=> setModalState(6)}>
                            <Image src={'./resources/owl-eyes.jpg'} roundedCircle fluid/>
                        </button>
                    </div>
                    <div className='ms-auto'>
                        <button className="mainButton" onClick={()=> setModalState(7)}>
                            <Image src={'./resources/owl-eyes.jpg'} roundedCircle fluid/>
                        </button>
                    </div>
                    <div className='dividerSmall'></div>
                </Stack>
            </Col>
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

      <Modal show={modalState===4} onHide={()=> setModalState(0)} dialogClassName="modal-90w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you are reading this text in a modal 4!
                </Modal.Body>
      </Modal>
      <Modal show={modalState===5} onHide={()=> setModalState(0)} dialogClassName="modal-90w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you are reading this text in a modal 5!
                </Modal.Body>
      </Modal>
      <Modal show={modalState===6} onHide={()=> setModalState(0)} dialogClassName="modal-90w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you are reading this text in a modal 6!
                </Modal.Body>
      </Modal>
      <Modal show={modalState===7} onHide={()=> setModalState(0)} dialogClassName="modal-90w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you are reading this text in a modal 7!
                </Modal.Body>
      </Modal>

    </Container>
    </body>);
}

export default Home;