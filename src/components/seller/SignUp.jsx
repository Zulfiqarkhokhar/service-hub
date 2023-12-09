// Import necessary components and styles from Ant Design
import { Form, Input, Select, Button } from "antd";
// import "antd/dist/antd.css";
import { Col, Row } from "react-bootstrap";

const { Option } = Select;

const SignUp = () => {
  // Form submission handler
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Add logic to handle signup, e.g., send data to a server
  };

  return (
    <div className="m-5 p-5">
      <Form
        onFinish={onFinish}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
      >
        <Row>
          <Col className="mt-5 pt-5">
            {/* Name input */}
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please input your name!" }]}
            >
              <Input />
            </Form.Item>

            {/* Email input */}
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
                {
                  type: "email",
                  message: "Please enter a valid email address!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Shop Name"
              name="Shop Name"
              rules={[
                { required: true, message: "Shop Name" },
                { type: "email", message: "Shop Name" },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

          <Col className="mt-5 pt-5">
            {/* Skills dropdown */}
            <Form.Item
              label="Skills"
              name="skills"
              rules={[
                { required: true, message: "Please select your skills!" },
              ]}
            >
              <Select mode="multiple" placeholder="Select skills">
                <Option value="javascript">JavaScript</Option>
                <Option value="react">React</Option>
                <Option value="node">Node.js</Option>
                {/* Add more options as needed */}
              </Select>
            </Form.Item>

            {/* Area dropdown */}
            <Form.Item
              label="Area"
              name="area"
              rules={[{ required: true, message: "Please select your area!" }]}
            >
              <Select placeholder="Select area">
                <Option value="frontend">Frontend</Option>
                <Option value="backend">Backend</Option>
                <Option value="fullstack">Full Stack</Option>
                {/* Add more options as needed */}
              </Select>
            </Form.Item>

            {/* Signup button */}
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Sign Up
              </Button>
            </Form.Item>
          </Col>

          <Col>
            <img src="/404-man.png.webp" width={"100%"} alt="_image"></img>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SignUp;
