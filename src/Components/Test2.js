import Carousel from 'react-bootstrap/Carousel';
import react from '../assets/images/react.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import angular from '../assets/images/angular.jpg'
import vue from '../assets/images/vue.jpg'
import { Container } from 'react-bootstrap';

function Test2() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="7">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={vue}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={react}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={angular}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row >
        <Col className="d-flex gap-2">
          <h1>RECENT POSTS</h1>
        </Col>

      </Row>
      <Row >
        <Col className="d-flex gap-2">

          <h3>show recent 5 approved content </h3>
        </Col>
      </Row>
    </Container>
  );

}

export default Test2;