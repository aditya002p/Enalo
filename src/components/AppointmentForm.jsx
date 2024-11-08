import React from "react";
import { Form, Input, Select, Button, Typography } from "antd";

const { Title } = Typography;
const { TextArea } = Input;

const appointmentTypes = [
  {
    label: "Fever",
    value: "Checkup",
  },
  {
    label: "Bone",
    value: "Broken-Bone",
  },
  {
    label: "Eyes",
    value: "Eyes-Checkup",
  },
];

const availableTimes = [
  {
    label: "4:00 PM",
    value: "4pm",
  },
  {
    label: "5:00 PM",
    value: "5pm",
  },
  {
    label: "6:00 PM",
    value: "6pm",
  },
];

const AppointmentForm = () => {
  const onFinish = (values) => {
    console.log("Form values:", values);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          padding: "40px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Title
          level={2}
          style={{
            textAlign: "center",
            fontFamily: "Montserrat",
            fontWeight: "700",
            fontSize: "16px",
            lineHeight: "24px",
            color: "#252B42",
            marginBottom: "10px",
          }}
        >
          Contact Us
        </Title>
        <Title
          level={3}
          style={{
            textAlign: "center",
            fontFamily: "Montserrat",
            fontWeight: "700",
            fontSize: "40px",
            lineHeight: "57px",
            color: "#252B42",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          Make an Appointment
        </Title>

        <Form
          name="appointment_form"
          layout="vertical"
          onFinish={onFinish}
          style={{
            marginTop: "20px",
            fontFamily: "Montserrat",
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#737373",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              "@media (min-width: 768px)": {
                flexDirection: "row",
              },
              gap: "16px",
            }}
          >
            <Form.Item
              name="fullName"
              rules={[
                { required: true, message: "Please enter your full name!" },
              ]}
              style={{ marginBottom: "0" }}
            >
              <Input placeholder="Full Name *" />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email!" },
                { type: "email", message: "Please enter a valid email!" },
              ]}
              style={{ marginBottom: "0" }}
            >
              <Input placeholder="Email *" />
            </Form.Item>

            <Form.Item
              name="appointmentType"
              rules={[
                {
                  required: true,
                  message: "Please select an appointment type!",
                },
              ]}
              style={{ marginBottom: "0" }}
            >
              <Select placeholder="Please Select" options={appointmentTypes} />
            </Form.Item>

            <Form.Item
              name="availableTime"
              rules={[{ required: true, message: "Please select a time!" }]}
              style={{ marginBottom: "0" }}
            >
              <Select placeholder="4:00 Available" options={availableTimes} />
            </Form.Item>

            <Form.Item name="message" style={{ marginBottom: "0" }}>
              <TextArea rows={4} placeholder="Message" />
            </Form.Item>

            <Form.Item style={{ marginBottom: "0" }}>
              <Button
                type="primary"
                htmlType="submit"
                style={{
                  width: "100%",
                  height: "40px",
                  backgroundColor: "#1890ff",
                  borderColor: "#1890ff",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#FFFFFF",
                }}
              >
                Book Appointment
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AppointmentForm;
