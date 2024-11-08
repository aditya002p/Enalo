import React from "react";
import AppointmentForm from "./components/AppointmentForm";
import "antd/dist/reset.css";

const App = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        alignItems: "center",
        backgroundColor: "#f2f2f2",
      }}
    >
      <AppointmentForm />
    </div>
  );
};

export default App;
