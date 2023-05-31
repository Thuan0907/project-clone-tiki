import { Divider } from "antd";
import React from "react";
import { Button, Form, Input } from "antd";
import "./Register.scss";

const Register = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  return (
    <>
      {" "}
      <div className="register">
        <h3>Form Register</h3>
        <Divider />
        <div className="form">
          <Form
            name="basic"
            labelCol={{ span: 24 }}
            // wrapperCol={{ span: 16 }}
            // s
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Full Name"
              name="fullName"
              rules={[
                { required: true, message: "Please input your Full Name!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please input your Email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Phone"
              name="phone"
              rules={[{ required: true, message: "Please input your Phone!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Register;
