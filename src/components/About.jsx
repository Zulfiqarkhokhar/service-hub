import React from 'react'
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container className='py-1 pb-5 d-flex flex-column align-items-center '>
      <h1 
        style={{fontWeight:"bolder",color:"#4bb543",fontSize:"4em" }}>Who We Are</h1>
      <h3 style={{fontSize:"2em"}}>Home Improvement Services</h3>
      <p>Service Hub is revolutionizing how people in Pakistan avail Home/Commercial Maintenance & Construction services. Service Hub has created a mobile app-based platform, where customers can connect with skilled handymen in the most convenient & fastest way possible. Service Hub is providing customers with a seamless process to book variety of services at fingertips. To ensure customer satisfaction & safety, Service Hub has made sure that all the service providers on the platform are highly skilled & have gone through rigorous background checks.</p>
      <p>Service Hub prioritizes customer satisfaction through fast & reliable service with the backing of an exceptional customer support team. Through fast delivery of variety of services, Service Hub has penetrated the market very quickly and is looking forward to expand into other service sectors.</p>
      <img src="/4-icons.webp" alt="_image" width={"75%"} />
    </Container>
  )
}

export default About;
