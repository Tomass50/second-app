import { Layout, Row } from "antd";
import React, { FC } from "react";
import LoginForm from "../components/LoginForm";

const Login: FC = () => {
  return (
    <Layout>
      <Row justify="center" align="middle" style={{ height: "100vh" }}>
        <LoginForm/>
      </Row>
    </Layout>
  );
};

export default Login;
