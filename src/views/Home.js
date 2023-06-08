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
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Image from 'react-bootstrap/Image';


function Home() 
{
    const [modalState, setModalState]=useState(0);

    function LinkWithTooltip({children, tooltip}) {
        return (
          <OverlayTrigger
            overlay={<Tooltip id="tooltip-1">{tooltip}</Tooltip>}
            placement="top"
            delayShow={300}
            delayHide={150}
          >
            <div className='tooltipText writingParagraph'>{children}</div>
          </OverlayTrigger>
        );
      }

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
            <Modal.Title className='w-100'>Scene 1: Gatsby's Party in the Library</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='writingParagraph'>
                    <header>Context: </header>
                    <p></p>
                    <header className='analysis'>Passage: </header>

                    <LinkWithTooltip tooltip={"His name comes from Nick's first impressions of his appearance."}>
                    A stout, middle-aged man, with enormous owl-eyed spectacles
                    </LinkWithTooltip>, was sitting somewhat 
                    <LinkWithTooltip tooltip={"Many people are drunk at Gatsby's party, so that in itself isn't abnormal. However, him being solitairy in the library is."}> drunk </LinkWithTooltip>
                    
                    on the edge of a great table, 
                    staring with unsteady concentration at the shelves of books. As we entered he wheeled excitedly around and examined 
                    Jordan from head to foot. “What do you think?” he demanded impetuously. “About what?” He waved his hand toward the 
                    book-shelves. “About that. As a matter of fact you needn’t bother to ascertain. I ascertained. 
                    
                    <LinkWithTooltip tooltip={""}> They’re real.” 
                    “The books?” He nodded. “Absolutely real — have pages and everything. I thought they’d be a nice durable cardboard. Matter of fact, they’re absolutely real. Pages and — Here! Lemme show you.” </LinkWithTooltip>
                    
                    Taking our scepticism for granted, he rushed to the bookcases and returned with Volume One of the 
                    
                    <LinkWithTooltip tooltip={""}> “Stoddard Lectures.” </LinkWithTooltip>

                    “See!” he cried triumphantly. 
                    “It’s a bona-fide piece of printed matter. 

                    <LinkWithTooltip tooltip={""}> It fooled me. This fella’s a regular Belasco. It’s a triumph. </LinkWithTooltip>
                    
                    What thoroughness! What realism! 
                    
                    <LinkWithTooltip tooltip={""}> Knew when to stop, too — didn’t cut the pages. </LinkWithTooltip>
                    
                    But what do you want? What do you expect?” 
                    He snatched the book from me and replaced it hastily on its shelf, muttering that 
                    
                    <LinkWithTooltip tooltip={""}> if one brick was removed the whole 
                        library was liable to collapse. </LinkWithTooltip>

                    <LinkWithTooltip tooltip={""}> “Who brought you?” he demanded. </LinkWithTooltip>
                     “Or did you just come? I was brought. Most people were 
                    brought.” Jordan looked at him alertly, cheerfully, without answering. “I was brought by a woman named Roosevelt,” 
                    he continued. “Mrs. Claud Roosevelt. Do you know her? I met her somewhere last night. I’ve been drunk for about a week
                     now, and I thought it might sober me up to sit in a library.” “Has it?” “A little bit, I think. I can’t tell yet. 
                     I’ve only been here an hour.

                     <LinkWithTooltip tooltip={""}> Did I tell you about the books? They’re real. They’re ——” “You told us.” </LinkWithTooltip>
                     We shook hands
                      with him gravely and went back outdoors. 
                </div>
                <header className='analysis'>Analysis:</header>
                <p>kurwa</p>
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
            <Modal.Title className='w-100'>Scene 2: Leaving Gatsby's Party</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="writingParagraph">

                <header>Context: </header>
                <p></p>

                <header className='analysis'>Passage: </header>

                A man in a long duster had dismounted from the wreck and now stood in the middle of the road, looking from the car to 
                the tire and from the tire to the observers in a pleasant, puzzled way. “See!” he explained. “It went in the ditch.” 
                The fact was infinitely astonishing to him, and I recognized first the unusual quality of wonder, and then the man — 
                it was the late patron of Gatsby’s library. “How’d it happen?” He shrugged his shoulders. “I know nothing whatever about 
                mechanics,” he said decisively. “But how did it happen? Did you run into the wall?” 
                <LinkWithTooltip tooltip={""}> “Don’t ask me,” said Owl Eyes, washing
                 his hands of the whole matter. “I know very little about driving — next to nothing. It happened, and that’s all I know.” </LinkWithTooltip>
                
                “Well, if you’re a poor driver you oughtn’t to try driving at night.” 
                 
                <LinkWithTooltip tooltip={""}> “But I wasn’t even trying,” he explained indignantly,
                “I wasn’t even trying.” </LinkWithTooltip>
                  
                An awed hush fell upon the bystanders. “Do you want to commit suicide?” 
                  
                <LinkWithTooltip tooltip={""}> “You’re lucky it was 
                just a wheel! A bad driver and not even TRYing!” “You don’t understand,” explained the criminal. “I wasn’t driving. 
                There’s another man in the car.” </LinkWithTooltip>

                The shock that followed this declaration found voice in a sustained “Ah-h-h!” as the 
                door of the coupe swung slowly open. The crowd — it was now a crowd — stepped back involuntarily, and when the door had 
                opened wide there was a ghostly pause. 

                <LinkWithTooltip tooltip={""}> Then, very gradually, part by part, a pale, dangling individual stepped out of 
                the wreck, pawing tentatively at the ground with a large uncertain dancing shoe. </LinkWithTooltip>  

                Blinded by the glare of the headlights 
                and confused by the incessant groaning of the horns, the apparition stood swaying for a moment before he perceived the man
                in the duster. “Wha’s matter?” he inquired calmly. “Did we run outa gas?” “Look!” Half a dozen fingers pointed at the 
                amputated wheel — he stared at it for a moment, and then
                
                <LinkWithTooltip tooltip={""}> looked upward as though he suspected that it had dropped from
                the sky. “It came off,” some one explained. He nodded. “At first I din’ notice we’d stopped.” </LinkWithTooltip>

                A pause. Then, taking 
                a long breath and straightening his shoulders, he remarked in a determined voice: “Wonder’ff tell me where there’s a
                gas’line station?” At least a dozen men, 
                
                <LinkWithTooltip> some of them little better off than he was, </LinkWithTooltip>
                
                explained to him that wheel and
                car were no longer joined by any physical bond. “Back out,” he suggested after a moment. “Put her in reverse.” “But
                the WHEEL’S off!” He hesitated. 
                
                <LinkWithTooltip> “No harm in trying,” he said. </LinkWithTooltip>

                <header className='analysis'>Analysis:</header>
                <p>kurwa</p>
                
                </div>    
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
            <Modal.Title className='w-100'>Gatsby's Funeral</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='writingParagraph'>

                    <header>Context: </header>
                    <p></p>

                    <header className='analysis'>Passage: </header>
                    As we started 
                    through the gate into the cemetery I heard a car stop and then the sound of someone splashing after us over the soggy
                    ground. I looked around. 
                    
                    <LinkWithTooltip tooltip={""}> It was the man with owl-eyed glasses whom I had found marvelling over Gatsby’s books in the 
                    library one night three months before. I’d never seen him since then. I don’t know how he knew about the funeral, 
                    or even his name. </LinkWithTooltip>

                    The rain poured down his thick glasses, and he took them off and wiped them to see the protecting 
                    canvas unrolled from Gatsby’s grave. I tried to think about Gatsby then for a moment, but he was already too far away,
                    and I could only remember, without resentment, that Daisy hadn’t sent a message or a flower. Dimly I heard someone
                    murmur, 
                    
                    <LinkWithTooltip tooltip={""}> “Blessed are the dead that the rain falls on,” and then the owl-eyed man said “Amen to that,” 
                    in a brave voice. </LinkWithTooltip>

                    We straggled down quickly through the rain to the cars. Owleyes spoke to me by the gate. “I couldn’t get to the house,” 
                    he remarked. “Neither could anybody else.” “Go on!” He started. 
                    
                    <LinkWithTooltip tooltip={""}> “Why, my God! they used to go there by the hundreds.” 
                    He took off his glasses and wiped them again, outside and in. “The poor son-of-a-bitch,” he said. </LinkWithTooltip>
                    
                    <header className='analysis'>Analysis:</header>
                    <p>kurwa</p>
                </div>
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

      <Modal show={modalState===4} onHide={()=> setModalState(0)} dialogClassName="modal-60w" centered={true}>
            <Modal.Header className='text-center' closeButton closeVariant={"white"}>
            <Modal.Title className='w-100'>Basic Bio</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you are reading this text in a modal 4!
                </Modal.Body>
      </Modal>
      <Modal show={modalState===5} onHide={()=> setModalState(0)} dialogClassName="modal-60w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title className='w-100'>Characterization</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you are reading this text in a modal 5!
                </Modal.Body>
      </Modal>
      <Modal show={modalState===6} onHide={()=> setModalState(0)} dialogClassName="modal-60w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title className='w-100'>Role in Plot/Character Development</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you are reading this text in a modal 6!
            </Modal.Body>
      </Modal>
      <Modal show={modalState===7} onHide={()=> setModalState(0)} dialogClassName="modal-60w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title className='w-100'>Symbolism</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Woohoo, you are reading this text in a modal 7!
                </Modal.Body>
      </Modal>

    </Container>
    </body>);
}

export default Home;