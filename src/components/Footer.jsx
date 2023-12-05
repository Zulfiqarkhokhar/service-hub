import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
    <Container style={{textAlign:"left"}}>
    <hr/>
      <Row className='py-5'>
        <Col className='col-5' >
          
           <img src="/service-hub-r.png" alt="service-hub" width={"60%"} />
        </Col>
        <Col>
            <h3  style={{color:"#4bb543"}} >CONTACT US</h3>
            <p>0316-0379911</p>
            <p>zulfiqarali.bscssef20@iba-suk.edu.pk</p>
            <p>Monday - Sunday 09:00AM - 12:00AM</p>
            <a href="#_" style={{textDecoration:"none"}}>Contact Us</a>
        </Col>
        <Col>
        <h3  style={{color:"#4bb543"}}>SERVICES</h3>
        <p>AC Services</p>
        <p>Plumbing Services</p>        
        <p>Generator Service</p>
        <p>Electrician Service</p>
        <a href="#_" style={{textDecoration:"none"}}>30+ Services</a>
        </Col>
      </Row>
    </Container>
    
    </>

  )
}

export default Footer;