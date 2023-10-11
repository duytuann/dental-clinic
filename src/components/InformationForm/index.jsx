import React, {useState} from "react";
import {Form, Input, DatePicker, Select, InputNumber, Button} from "antd";
import "./styles.css";

const {Option} = Select;
const {TextArea} = Input;

const InformationForm = () => {
  const [form] = Form.useForm();
  const [phoneNumber, setPhoneNumber] = useState();
  const [formLayout, setFormLayout] = useState("horizontal");
  const onFormLayoutChange = ({layout}) => {
    setFormLayout(layout);
  };
  const formItemLayout =
    formLayout === "horizontal"
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;
  const buttonItemLayout =
    formLayout === "horizontal"
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
  };
  return (
    <div className="form-container">
      <Form
        {...formItemLayout}
        layout={formLayout}
        form={form}
        initialValues={{
          layout: formLayout,
        }}
        style={{
          maxWidth: formLayout === "inline" ? "none" : 1000,
        }}
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Full Name"
          name="fullname"
          rules={[
            {
              required: true,
              message: "Please input your full name!",
            },
            {
              max: 200,
              message: "Name cannot exceed 200 characters",
            },
          ]}
        >
          <Input placeholder="Full Name" />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dateOfBirth"
          rules={[
            {
              required: true,
              message: "Please select your date of birth!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Sex"
          name="sex"
          rules={[
            {
              required: true,
              message: "Please select your gender!",
            },
          ]}
        >
          <Select placeholder="Select your gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="neither">Neither</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {required: true, message: "Please input your phone number!"},
            {len: 10, message: "Phone number should be 10 digits"},
            {
              pattern: /^[0-9]+$/,
              message: "Phone number should only contain numbers",
            },
          ]}
        >
          <InputNumber
            style={{width: "100%"}}
            maxLength={10}
            min={0}
            max={9999999999}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid email!",
            },
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Disease Problems"
          name="diseaseProblems"
          rules={[
            {
              max: 500,
              message: "Cannot exceed 500 characters",
            },
          ]}
        >
          <TextArea
            rows={4}
            placeholder="Describe your disease problems (if any)"
          />
        </Form.Item>
        <Form.Item>
          <Button className="submit-button" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default InformationForm;
