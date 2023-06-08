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
                    <p>Nick and Jordan are at Gatsby's party, and they explore and find the library, where they meet Owl Eyes for the first time.</p>
                    <header className='analysis'>Passage: </header>

                    <LinkWithTooltip tooltip={"His name comes from Nick's first impressions of his appearance."}>
                    A stout, middle-aged man, with enormous owl-eyed spectacles
                    </LinkWithTooltip>, was sitting somewhat 
                    <LinkWithTooltip tooltip={"Many people are drunk at Gatsby's party, so that in itself isn't abnormal. However, him being solitairy in the library is."}> drunk </LinkWithTooltip>
                    
                    on the edge of a great table, 
                    staring with unsteady concentration at the shelves of books. As we entered he wheeled excitedly around and examined 
                    Jordan from head to foot. “What do you think?” he demanded impetuously. “About what?” He waved his hand toward the 
                    book-shelves. “About that. As a matter of fact you needn’t bother to ascertain. I ascertained. 
                    
                    <LinkWithTooltip tooltip={"Whether the books are real or not is important. Gatsby is seen as someone 'fake' who is trying to pretend to be a part of the elite, and Owl Eyes' default assumption that they probably are fake is a testament to that. However, Owl Eyes also demonstrates respect upon learning the books are real."}> They’re real.” 
                    “The books?” He nodded. “Absolutely real — have pages and everything. I thought they’d be a nice durable cardboard. Matter of fact, they’re absolutely real. Pages and — Here! Lemme show you.” </LinkWithTooltip>
                    
                    Taking our scepticism for granted, he rushed to the bookcases and returned with Volume One of the 
                    
                    <LinkWithTooltip tooltip={"The same book that Tom was talking about previously(though he had not actually read)."}> “Stoddard Lectures.” </LinkWithTooltip>

                    “See!” he cried triumphantly. 
                    “It’s a bona-fide piece of printed matter. 

                    <LinkWithTooltip tooltip={"An incredible actor"}> It fooled me. This fella’s a regular Belasco. It’s a triumph. </LinkWithTooltip>
                    
                    What thoroughness! What realism! 
                    
                    <LinkWithTooltip tooltip={"The content isn't important, and Owl Eyes is acknowledging that Gatsby would be better off spending his time differently, which is why Gatsby not reading the books makes Owl Eyes feel even more impressed."}> Knew when to stop, too — didn’t cut the pages. </LinkWithTooltip>
                    
                    But what do you want? What do you expect?” 
                    He snatched the book from me and replaced it hastily on its shelf, muttering that 
                    
                    <LinkWithTooltip tooltip={"Foreshadowing for Gatsby's facade. Parallels how just one thing being found out could lead to Gatsby not being accepted as 'the rich' anymore."}> if one brick was removed the whole 
                        library was liable to collapse. </LinkWithTooltip>

                    <LinkWithTooltip tooltip={"Suddenly turned very demanding. Clearly completely drunk."}> “Who brought you?” he demanded. </LinkWithTooltip>
                     [...] I thought it might sober me up to sit in a library.” “Has it?” “A little bit, I think. I can’t tell yet. 
                     I’ve only been here an hour.

                     <LinkWithTooltip tooltip={"Returns to previous point, indicating just how drunk he is."}> Did I tell you about the books? They’re real. They’re ——” “You told us.” </LinkWithTooltip>
                     We shook hands
                      with him gravely and went back outdoors. (35)
                </div>
                <header className='analysis'>Analysis:</header>
                <p>In the very first scene he appears, Owl Eyes offers a very interesting perspective, shifting ideas of readers on many topics, especially those regarding the supposed status of Gatsby.
                By clearly expressing his surprise that the books are real, it becomes clear that most people (willingly) go along with Gatsby's wealthy identity, which most assume is a facade.
                Being a personal external to the book so far, Owl Eyes is great at showing that perspective because it shifts from just Nick to a sense of "everyone."
                This is only increased by Owl Eyes' apparent drunkenness, as being drunk is often associated with sharing one's true feelings, which
                would indicate he genuinely thinks Gatsby is just acting. However, he also expresses that Gatsby is an incredible actor,
                and he feels genuine admiration for the amount of effort Gatsby is willing to expend so much effort. Even though the pages haven't been cut(clearly indicating Gatsby as a fraud),
                Owl Eyes is even more impressed.

                All of this is a setup for who Owl Eyes is as a character. By being both a drunk and offering insightful opinions, Owl Eyes is set up
                to be a sort of oracle for the story (especially in how he foreshadows Gatsby's end). However, furthermore, the way in which Owl Eyes
                clearly admires Gatsby is the way in which he is first tied to the symbol he represents: the American Dream. Owl Eyes admires Gatsby
                because he climbed up the social ladder through his incredible "acting," which is why he feels content.
                </p>
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

                <header>Context:</header>
                <p>Nick is leaving Gatsby's party when he comes across a car accident, which Owl Eyes is involved in.</p>

                <header className='analysis'>Passage: </header>

                “See!” he explained. “It went in the ditch.” 
                The fact was infinitely astonishing to him, and I recognized first the unusual quality of wonder, and then the man — 
                it was the late patron of Gatsby’s library. “How’d it happen?” He shrugged his shoulders. “I know nothing whatever about 
                mechanics,” he said decisively. “But how did it happen? Did you run into the wall?” 
                <LinkWithTooltip tooltip={"Disconnected from the whole matter. Doesn't feel he did anything wrong"}> “Don’t ask me,” said Owl Eyes, washing
                 his hands of the whole matter. “I know very little about driving — next to nothing. It happened, and that’s all I know.” </LinkWithTooltip>
                
                “Well, if you’re a poor driver you oughtn’t to try driving at night.” 
                 
                <LinkWithTooltip tooltip={"Gets blamed but continues to try to argue his innocence"}> “But I wasn’t even trying,” he explained indignantly,
                “I wasn’t even trying.” </LinkWithTooltip>
                  
                An awed hush fell upon the bystanders. “Do you want to commit suicide?” 
                  
                <LinkWithTooltip tooltip={"Continue to be blamed, even though he has a valid explanation"}> “You’re lucky it was 
                just a wheel! A bad driver and not even TRYing!” “You don’t understand,” explained the criminal. “I wasn’t driving. 
                There’s another man in the car.” </LinkWithTooltip>

                The shock that followed this declaration found voice in a sustained “Ah-h-h!” as the 
                door of the coupe swung slowly open. The crowd — it was now a crowd — stepped back involuntarily, and when the door had 
                opened wide there was a ghostly pause. 

                <LinkWithTooltip tooltip={"Many words associated with negative emotions. Intentionally trying to get you to dislike him."}> Then, very gradually, part by part, a pale, dangling individual stepped out of 
                the wreck, pawing tentatively at the ground with a large uncertain dancing shoe. </LinkWithTooltip>  

                Blinded by the glare of the headlights 
                and confused by the incessant groaning of the horns, the apparition stood swaying for a moment before he perceived the man
                in the duster. “Wha’s matter?” he inquired calmly. “Did we run outa gas?” “Look!” Half a dozen fingers pointed at the 
                amputated wheel — he stared at it for a moment, and then
                
                <LinkWithTooltip tooltip={"Driver himself can't comprehend what happened. To him, seems kind of like 'fate' happened."}> looked upward as though he suspected that it had dropped from
                the sky. “It came off,” some one explained. He nodded. “At first I din’ notice we’d stopped.” </LinkWithTooltip>

                A pause. Then, taking 
                a long breath and straightening his shoulders, he remarked in a determined voice: “Wonder’ff tell me where there’s a
                gas’line station?” At least a dozen men, 
                
                <LinkWithTooltip tooltip={"All drunk but driver still more dumbfounded"}> some of them little better off than he was, </LinkWithTooltip>
                
                explained to him that wheel and
                car were no longer joined by any physical bond. “Back out,” he suggested after a moment. “Put her in reverse.” “But
                the WHEEL’S off!” He hesitated. 
                
                <LinkWithTooltip tooltip={"Keep on trying regardless"}> “No harm in trying,” he said. </LinkWithTooltip> 

                (42)

                <header className='analysis'>Analysis:</header>
                <p>This passage further encourages the conclusion that Owl Eyes is directly tied to the American Dream because
                    this situation is a perfect analogy for how the American Dream has changed for the worse. Even though Owl Eyes has actually
                    done nothing wrong in this situation, he is continually blamed. Even after providing a valid explanation, the blame only shifts
                    to his driver friend, who is even more confused about what is going on. This perfectly parallels how many of the rich simply
                    blame the poor for not "trying hard enough" when it comes to achieving wealth, when, in reality, their number one obstacle
                    is simply the wealthy. The poor are consistently blamed for things they cannot control, and this ultimately leads to a state of
                    confusion where they begin to question themselves. This specific scene is an expression of disgust for the way the American Dream
                    has changed.
                </p>
                
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
                    <p>After Gatsby is shot, Nick attends his funeral. Despite the large amount of people that attended his parties,
                        Nick can find almost no one at the funeral. The one person he does find is Owl Eyes.
                    </p>

                    <header className='analysis'>Passage: </header>
                    As we started 
                    through the gate into the cemetery I heard a car stop and then the sound of someone splashing after us over the soggy
                    ground. I looked around. 
                    
                    <LinkWithTooltip tooltip={"Despite not being the most frequent visitor, Owl Eyes has shown up to Gatsby's funeral, which even Daisy(who loved Gatsby) didn't do"}> It was the man with owl-eyed glasses whom I had found marvelling over Gatsby’s books in the 
                    library one night three months before. I’d never seen him since then. I don’t know how he knew about the funeral, 
                    or even his name. </LinkWithTooltip>

                    The rain poured down his thick glasses, and he took them off and wiped them to see the protecting 
                    canvas unrolled from Gatsby’s grave. I tried to think about Gatsby then for a moment, but he was already too far away,
                    and I could only remember, without resentment, that Daisy hadn’t sent a message or a flower. Dimly I heard someone
                    murmur, 
                    
                    <LinkWithTooltip tooltip={"The way Owl Eyes' voice is described as brave could indicate that Owl Eyes is truly struggling with Gatsby's death and cannot come to terms with it."}> “Blessed are the dead that the rain falls on,” and then the owl-eyed man said “Amen to that,” 
                    in a brave voice. </LinkWithTooltip>

                    We straggled down quickly through the rain to the cars. Owleyes spoke to me by the gate. “I couldn’t get to the house,” 
                    he remarked. “Neither could anybody else.” “Go on!” He started. 
                    
                    <LinkWithTooltip tooltip={"Instead of mourning Gatsby's death, he mourns the lack of people showing up to his funeral."}> “Why, my God! they used to go there by the hundreds.” 
                    He took off his glasses and wiped them again, outside and in. “The poor son-of-a-bitch,” he said. </LinkWithTooltip>

                    (131)
                    
                    <header className='analysis'>Analysis:</header>
                    <p>Ultimately, this is the conclusion to the so-called American Dream. Despite the fact that Owl Eyes has barely shown
                        up in the story and has been seen to have rarely interacted with Gatsby, he still is one of the few people to show
                        up to Gatsby's funeral, even going through the effort of trying to figure it out. This is an indication of Owl Eyes'
                        relevance, which in this case, is the death of the very thing he represents. Although Owl Eyes was optimistic in the
                        first scene he appeared in because of Gatsby's pursuit of what he considered the American Dream(which, to be fair, was already pretty far from the original American Dream considering the rules that were bent), he only grows
                        disillusioned in the second scene, finally losing all hope in the end. With Gatsby's death, Owl Eyes lets go of the American Dream, signifying its death.
                        Even this action is a struggle for him, as he is forced to try to "bravely" acknowledge both the death of Gatsby and the death of the American Dream. Ultimately, Owl Eyes chooses to
                        mourn how Gatsby only had a small amount of people attend his funeral because, in his mind, that is an indication of how Gatsby couldn't achieve the American Dream, only taking it to the point of an effective facade.
                        If Gatsby couldn't do it, then no one else can do it, meaning the American Dream is truly gone.
                    </p>
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
            <Modal.Title className='w-100'>Basic Info</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <p className='analysis'>1. Owl Eyes(nicknamed that by Nick. Nick never verbally says Owl Eyes either) is an old man with owl-like glasses.</p>
                <p className='analysis'>2. He is often seen as drunk in the scenes that he appears in, resulting in a somewhat untrustworthy image</p>
                <p className='analysis'>3. Despite this, in the scenes he appears in, he tends to offer introduce some profound points in various ways.</p>
                <p className='analysis'>4. Through the entirety of The Great Gatsby, he appeared in 3 separate scenes, all of which were incredibly important.</p>
            </Modal.Body>
      </Modal>
      <Modal show={modalState===5} onHide={()=> setModalState(0)} dialogClassName="modal-60w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title className='w-100'>Characterization</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className="analysis">
                    Although Owl Eyes only appears in a total of 3 scenes, the way he is characterized is still incredibly relevant, and all of it contributes
                    to the way he impacts the message of the book and the plot. First and foremost, one of the things he is most characterized for is
                    how he is perpetually drunk. In 2 out of the 3 scenes that he appears in, he is completely drunk and unable to behave normally. This is
                    very important, as, weirdly enough, it kind of helps his credibility. Unlike other characters who are consciously trying to decieve,
                    he just says what he wants to say because he's always drunk(even if it isn't always coherent). This, combined with how, despite being drunk,
                    he continues to bring up interesting points is key in making him appear as what Fitzgerald wants him to appear as, a sort of plot device.
                    He is a plot device in 2 senses. First, he functions as a way to foreshadow. His comment about bricks falling down in the first scene he appears in
                    foreshadows Gatsby's eventual end, and the second scene he appears in is a direct foreshadow to the accident that will eventually occur. Finally,
                    one of the other main things that Owl Eyes is characterized for is his admiration of Gatsby and how he admires Gatsby's incredible skills
                    in mantaining a facade to get him to his initial high position. This is also key to the understanding of Owl Eyes as it helps establish
                    where Owl Eyes is coming from in regards to the American Dream.
                </p>
                <p className='analysis'> All of this culmulates in the final scene that Owl Eyes appears in. The scene of Gatsby’s funeral is the only scene where Owl Eyes isn't drunk,
                    and, in it, Owl Eyes sincerely mourns for the loss of Gatsby, who he heavily admired, because the loss of Gatsby means the end of the American Dream.
                    It is the effective conclusion of Owl Eyes' characterization.</p>
                </Modal.Body>
      </Modal>
      <Modal show={modalState===6} onHide={()=> setModalState(0)} dialogClassName="modal-60w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title className='w-100'>Role in Plot/Character Development</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='analysis'>Although he is mainly known for his role in symbolism, Owl Eyes also plays a large role in plot development, especially in
                terms of foreshadowing. In terms of roles in plot progression he played outside of foreshadowing, he probably played the largest role in the first scene he appeared in.
                This is because his shock and admiration of Gatsby's books being real largely altered(or could've confirmed) the perspective that Gatsby is highly fake not just in the reader's
                perspective but in the characters' perspectives as well. Furthermore, the way in which Owl Eyes specifically identifies the books
                Gatsby owns as the ones that Tom was talking about previously also lets readers draw contrast between Tom and Gatsby. This confusion is even further extended in how Owl
                Eyes describes the books as not being read but still feels admiration(in fact seemingly even more admiration) for Gatsby. Considering that neither of them
                actually read, there is certainly a comparison to be drawn there which Owl Eyes highly contributes to.
                <p className='analysis'>Outside of this Owl Eyes also is the master of foreshadowing. In the first scene, he foreshadows Gatsby's eventual
                collapse by saying that a single mistake could lead to his downfall(albeit indirectly through a metaphor). His foreshadowing is even
                more noticable when looking at the Myrtle accident in retrospect. In the second scene, Owl Eyes is part of a vehicle accident
                where the victim was blamed even though they didn't do anything to cause the accident, and this is somewhat reminiscent of what
                happens with Myrtle when she is killed by Daisy. This is especially true in that Myrtle essentially died as a result of her
                trying to ascend the social ladder, which is what the incident Owl Eyes is in was a metaphor for in the first place.</p>
                </p>
            </Modal.Body>
      </Modal>
      <Modal show={modalState===7} onHide={()=> setModalState(0)} dialogClassName="modal-60w" centered={true}>
            <Modal.Header closeButton closeVariant={"white"}>
            <Modal.Title className='w-100'>Symbolism</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p className='analysis'>
                    Clearly, the biggest role Owl Eyes plays in the story is in sybolism and how he indirectly symbolizes the American Dream
                    and the American hopes for it to come true. This symbol stems from the very first scene he participates in. His approval
                    for Gatsby is almost an immediate clue that Owl Eyes was related to the American Dream in the sense that, despite the methods Gatsby has had to take,
                    Gatsby is clearly the closest to having achieved something like the American dream, and Owl Eyes is clearly praising the parts of Gatsby's characteristics
                    that led him to be able to reach his goal anyway. At this point in the story, the hopes for the American Dream seem quite optimistic, even though
                    they aren't done by the traditional methods.   
                </p>
                <p className='analysis'>
                    This optimistic view heavily changes in the face of the second scene that Owl Eyes appears in. While the first scene
                    was all about the positives of the American Dream, the second season directly parallels all the negatives. Owl Eyes
                    being the victim in the incident while being unable to do anything about it yet still being blamed for it is a direct
                    parallel to the way in which, at some point, the American Dream grew to be nigh impossible, yet the rich still
                    blamed the poor for not being able to do enough to reach the same level as them. This resounds even more true when comparing
                    the incident with the major other vehicle incident in the book with Myrtle. In the second season, Owl Eyes is used to expresses
                    the delusionment with the American Dream. 
                </p>
                <p className='analysis'>
                    Ultimately, Owl Eyes lets the American Dream/the hopes for it die in the last scene he appears in. As shown in the first
                    scene he appears in, a lot of his faith/optimism in the American Dream takes the form of Gatsby, who is living proof that
                    at least parts of the American Dream are possible. However, after his death, Owl Eyes comes to the conclusion that that is no longer the case.
                    This is even more true when considering the fact that Owl Eyes specifically laments the lack of people at Gatsby's funeral, which
                    is most likely because of the fact that Owl Eyes has come to accept that Gatsby's success was more of a fraud. By the end of the book,
                    the hopes for the American Dream are dead with Gatsby, and Owl Eyes has to work up his courage to let it go.
                </p>
                </Modal.Body>
      </Modal>

    </Container>
    </body>);
}

export default Home;