import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signin from "../../assets/images/signin.png";
import { Content, Div, Icons } from "./style";
import useAxios from "../../hooks/useAxios";
import Cookies from "js-cookie";

const SignIn = () => {
  const { loading, sendRequest } = useAxios();
  const [error, setError] = useState(false);
  const emailRef = useRef(null);
  const pwRef = useRef(null);
  const navigate = useNavigate();

  const checkToken = async () => {
    try {
      const response = await sendRequest({
        method: "get",
        url: `/api/user/verification/${Cookies.get("_token")}`,
      });

      response.status === 200 && navigate("/admin/home");
    } catch (err) {
      setError(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    checkToken();
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      login: emailRef?.current?.value,
      password: pwRef?.current?.value,
    };
    try {
      const response = await sendRequest({
        method: "post",
        url: "/api/user/login",
        data: userData,
      });
      if (response.status === 200) {
        Cookies.set("_token", response.data.token);
        Cookies.set("_userDetails", JSON.stringify(response.data.userDetails));
        navigate("/admin/home");
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          <Content.Left>
            <Content.Title>Welcome back!</Content.Title>
            <Content.SubTitle>Meet the good taste today</Content.SubTitle>
            <Content.Form onSubmit={onFormSubmit}>
              <Div>
                <Content.Label>E-mail or phone number</Content.Label>
                <Content.Input
                  placeholder="Type your e-mail or phone number"
                  type="text"
                  autoComplete="current-email"
                  defaultValue={"admin"}
                  ref={emailRef}
                  $error={error.toString()}
                />
              </Div>
              <Div>
                <Content.Label>Password</Content.Label>
                <Content.Input
                  placeholder="Type your password"
                  type="password"
                  autoComplete="current-password"
                  ref={pwRef}
                  defaultValue={"123"}
                  $error={error.toString()}
                />
                <Content.Forgot>Forgot Password?</Content.Forgot>
              </Div>
              <Div>
                <Content.Button
                  disabled={loading}
                  $loading={loading.toString()}
                >
                  {loading ? "loading..." : "Sign In"}
                </Content.Button>
              </Div>
            </Content.Form>
            <Div>
              <Content.Other>or do it via other accounts</Content.Other>
              <Content.Media>
                <Icons.Google />
                <Icons.Apple />
                <Icons.Facebook />
              </Content.Media>
              <Content.Next>
                Don’t have an account? <NavLink to="/signup">Sign Up</NavLink>
              </Content.Next>
            </Div>
          </Content.Left>
          <Content.Right>
            <Content.Img src={signin} />
          </Content.Right>
        </Content>
      </div>
    </div>
  );
};

export default SignIn;
