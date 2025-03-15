import React from "react";
import LoginInput from "../../components/LoginLayout/LoginInput";
import Layout from "../../components/LoginLayout/Layout";

const Login = () => {
  return (
    <Layout>
      <LoginInput isRegister />
    </Layout>
  );
};

export default Login;
