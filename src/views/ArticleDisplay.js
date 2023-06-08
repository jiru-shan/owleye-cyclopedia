import { Container } from 'react-bootstrap';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function Articles() {
    return (
      <body className='mainBackground'>
          <Container fluid>
            <Row className="topRow">
              <Col className="firstCol middleButtonStack">
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>Bio</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Who is Owl Eyes?</Card.Subtitle>
                          <Card.Text>
                          Just the straight hard facts.
                          </Card.Text>
                          <Card.Link href="#/bio">Read Here</Card.Link>
                        </Card.Body>
                      </Card>
              </Col>
          </Row>

            <Row className="topRow">
              <Col className="firstCol">
                  <Stack className="middleButtonStack" direction="horizontal">
                      <div>
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>Character Relations</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">Some Neat Facts</Card.Subtitle>
                          <Card.Text>
                          What are Owl-Eyes' connection to other characters?
                          </Card.Text>
                          <Card.Link href="#/relations">Read Here</Card.Link>
                        </Card.Body>
                      </Card>
                      </div>

                      <div className='dividerSmall'>
                      </div>

                      <div>
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>Owl Eyes Interview</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">An Interview With the Man Himself</Card.Subtitle>
                          <Card.Text>
                          Learn more about his feelings after Gatsby's death!
                          </Card.Text>
                          <Card.Link href="#/interview">Read Here</Card.Link>
                        </Card.Body>
                      </Card>
                      </div>

                      <div className='dividerSmall'>
                      </div>

                      <div>
                      <Card style={{ width: '18rem' }}>
                        <Card.Body>
                          <Card.Title>The Day He Died</Card.Title>
                          <Card.Subtitle className="mb-2 text-muted">A Retelling</Card.Subtitle>
                          <Card.Text>
                          Where was Owl Eyes when Gatsby died? Come find out.
                          </Card.Text>
                          <Card.Link href="#/fanfic">Read Here</Card.Link>
                        </Card.Body>
                      </Card>
                      </div>
                  </Stack>
              </Col>
            </Row>
          </Container>
      </body>
    );
  }
  
  export default Articles;

