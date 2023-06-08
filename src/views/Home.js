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
                        <button className="mainButtonS" onClick={()=> setModalState(4)}>
                            <Image className="mainImage" src={'https://cdn4.iconfinder.com/data/icons/documents-letters-and-stationery/400/doc-10-512.png'} thumbnail fluid/>
                        </button>
                    </div>
                    <div className='ms-auto '>
                        <button className="mainButtonS" onClick={()=> setModalState(5)}>
                            <Image className="mainImage" src={'https://t4.ftcdn.net/jpg/02/57/53/83/360_F_257538375_qUSk34MmbcbEm62JanJf4IV3c1PYhq4O.jpg'} fluid/>
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
                        <button className="mainButtonS" onClick={()=> setModalState(1)}>
                            <Image className="mainImage" src={'https://assets.iflscience.com/assets/articleNo/67775/aImg/66118/vintage-books-m.jpg'} fluid/>
                        </button>
                    </div>
                    <div className='divider'>
                    <hr className='line'></hr>
                    </div>
                    <div>
                        <button className="mainButtonS" onClick={()=> setModalState(2)}>
                            <Image className="mainImage" src={'https://img1.cgtrader.com/items/110538/25a195d58b/large/vintage-car-wheel-3d-model-max-obj-fbx-mtl.png'} fluid/>
                        </button>
                    </div>
                    <div className='divider'>
                    <hr className='line'></hr>
                    </div>
                    <div>
                        <button className="mainButtonS" onClick={()=> setModalState(3)}>
                        <Image className="mainImage" src={'https://images.ctfassets.net/4ivszygz9914/3d3d0509-5150-4ec0-a129-a82b8af60881/10e6da902a2e13f69cb8ec05e7f44703/2e0679f7-393e-4966-84bb-7450075a4f02.jpeg?fm=webp'} fluid/>
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
                        <button className="mainButtonS" onClick={()=> setModalState(6)}>
                            <Image className="mainImage" src={'https://timvandevall.com/wp-content/uploads/2013/07/Plot-Diagram-Worksheet-01.png'} thumbnail fluid/>
                        </button>
                    </div>
                    <div className='ms-auto'>
                        <button className="mainButtonS" onClick={()=> setModalState(7)}>
                            <Image className="mainImage" thumbnail src={'https://i.etsystatic.com/34565277/r/il/4bd024/3783408258/il_fullxfull.3783408258_jhef.jpg'} fluid/>
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