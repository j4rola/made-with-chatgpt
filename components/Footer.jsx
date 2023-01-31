import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark py-5">
      <Container>
        <Row>
          <Col md={3}>
            <h5 className="text-white">About Us</h5>
            <p className="text-muted w-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Donec congue id magna in vehicula.
            </p>
          </Col>
          <Col md={3}>
            <h5 className="text-white">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-muted">Home</a>
              </li>
              <li>
                <a href="#" className="text-muted">About</a>
              </li>
              <li>
                <a href="#" className="text-muted">Services</a>
              </li>
              <li>
                <a href="#" className="text-muted">Contact</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="text-white">Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fas fa-envelope mr-2 text-muted"></i>
                <a href="#" className="text-muted">email@example.com</a>
              </li>
              <li>
                <i className="fas fa-phone mr-2 text-muted"></i>
                <a href="#" className="text-muted">(123) 456-7890</a>
              </li>
            </ul>
          </Col>
          <Col md={3}>
            <h5 className="text-white">Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="text-muted">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-muted">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-muted">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
