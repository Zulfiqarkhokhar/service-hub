import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const Value = () => {
  return (
    <Container>
    <Row className='py-5 mt-5'>
      <Col className='d-flex flex-column justify-content-center py-3'>
        <h1 style={{fontSize:"4em",textAlign:"left"}} >VALUE{" "}</h1>
        <h1 style={{fontSize:"4em",textAlign:"left"}}>
         <span style={{color:"#4bb543",}}>PROPOSITION </span>
        </h1>
        <hr />
        <p className='py-3'>Service Hub provides you with a complete solution to get variety of services at your fingertips, at competitive market rates and a name you can depend on.</p>
      </Col>
      <Col className='py-3 '>
        <img src="/value.webp" alt="_value" srcset="" width={"80%"}/>
      </Col>  
    </Row>
    </Container>
  )
}

export default Value;

