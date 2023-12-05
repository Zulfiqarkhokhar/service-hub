import { Form, Input, Select, Space, Tooltip, Typography } from 'antd'
import { Option } from 'antd/es/mentions'
import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import Wave from './Wave'

const HeroSection = () => {
  return (
    <>
    <Row>
        <Col  className='d-flex  justify-content-center align-items-center flex-column' >
        <h4>Place Your</h4>
        <h1>ORDER NOW !!</h1>
        <Form
            name="complex-form"
            labelCol={{
            span: 8,
            }}
            wrapperCol={{
            span: 16,
            }}
            style={{
            maxWidth: 600,
            }}
        >
            <Row>
                <Col className='d-flex justify-content-end'>
                <Input
                    style={{
                        width: 160,
                    }}
                    placeholder="Please input"
                    />
                </Col>
                <Col className='d-flex justify-content-start'>
                <Input
                    style={{
                        width: 160,
                    }}
                    placeholder="Please input"
                    />
                </Col>
            </Row>
            <Row className='py-3'>
                <Col className='d-flex align-items-end  justify-content-end'>
                <Select placeholder="Select province" style={{width:"160px"}} >
                    <Option value="Zhejiang">Zhejiang</Option>
                    <Option value="Jiangsu">Jiangsu</Option>
                </Select>
                </Col>
                <Col  className='d-flex justify-content-start'>
                <Select placeholder="Select province"   style={{width:"160px"}}>
                    <Option value="Zhejiang">Zhejiang</Option>
                    <Option value="Jiangsu">Jiangsu</Option>
                </Select>
                </Col>
            </Row>
               <Row>
                <Col className='d-flex justify-content-end'>
                    <Button variant='success'>ORDER NOW</Button>
                </Col>
                <Col></Col>
               </Row>
        </Form>
      </Col>

      <Col className='py-2'>
         <img src='/hero.png' width={"100%"} alt='_image'></img>           
      </Col>
    </Row>
    <Wave/>
    </>
  )}

export default HeroSection
