import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const GuidePage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>How to Use This Project</h1>
          <p>Welcome to our project! Here's how to use it:</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Step 1: Upload an X-ray Image</Card.Title>
              <Card.Text>
                Click on the "Upload Image" button and select an X-ray image from your computer or device.
              </Card.Text>
              {/* <Button variant="primary">Upload Image</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Step 2: Submit the Image</Card.Title>
              <Card.Text>
                Once you have selected an X-ray image, click the "Submit" button to send the image to our server.
              </Card.Text>
              {/* <Button variant="primary">Submit</Button> */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Step 3: View the Results</Card.Title>
              <Card.Text>
                After submitting the image, you will see the results of our analysis. The results will be displayed in the form of a text message and an image, indicating whether the X-ray image contains signs of pneumonia or not.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GuidePage;
