import React from 'react';
import { Container, Row, Col, DropdownButton, Breadcrumb, Carousel, Figure,
  ListGroup, Jumbotron, Form, Button, Modal } from 'react-bootstrap';

function App() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Container fluid>
        <Row style={{ backgroundColor: "black" }}>
          <Col>
            <DropdownButton id="dropdown-basic-button" title="Pilih Bahasa">
            </DropdownButton>
          </Col>
          <Col xs={{ span: 2, offset: 8 }}>
            <Figure>
              <Figure.Image
                width={64}
                height={64}
                alt="Profile"
                src="../img/Profile.png"
              />
              <Figure.Caption style={{ color: "white" }}>
                Alan Saputra
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 4, offset: 8 }}>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
              <Breadcrumb.Item active>Bola</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 6, offset: 3}}>
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../img/neymar.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Neymar Bahas Kontrak Baru Di Paris Saint-Germain</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../img/sani-rizki-fauzi.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="../img/england.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Inggris Mau Jadi Tim Terbaik Di Dunia</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Liga 1 Indonesia
              </ListGroup.Item>
              <ListGroup.Item as="li">Liga Primer Inggris</ListGroup.Item>
              <ListGroup.Item as="li" disabled>
                Divisi Primera
              </ListGroup.Item>
              <ListGroup.Item as="li">Seria A</ListGroup.Item>
              <ListGroup.Item as="li">Ligue 1</ListGroup.Item>
              <ListGroup.Item as="li">Bundes Liga</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Jumbotron>
              <h1>DIVISI PRIMERA</h1>
              <p>
                Main Untuk Catalunya, Gerald Pique Minta Dihormati
              </p>
              <p>
                <Button variant="primary">Read More</Button>
              </p>
            </Jumbotron>
          </Col>
          <Col>
            <center>
              <img src="../img/login.png" width={64} height={64} alt="login"/>
              <h3>Silahkan Login</h3>
            </center>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required/>
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required/>
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Term & Condition" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleShow}>
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>Anda Berhasil Login</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Username & Password
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default App;
