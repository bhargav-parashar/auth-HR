import React from "react";
import LoginInput from "../../components/LoginLayout/LoginInput";
import Layout from "../../components/LoginLayout/Layout";

const Login = ({isHR}) => {
  return (
    <Layout>
      <LoginInput isHR={isHR} />
    </Layout>
  );
};

export default Login;
