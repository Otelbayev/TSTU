import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import signup from "../../assets/images/signup.png";
import { Content, Div, Icons } from "../SignIn/style";

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <Content data-aos="fade-up">
          <Content.Left>
            <Content.Title>Create your account</Content.Title>
            <Content.SubTitle>It’s free and easy</Content.SubTitle>
            <Content.Form>
              <Div>
                <Content.Label>Full name</Content.Label>
                <Content.Input
                  placeholder="Enter your name"
                  type="text"
                  autoComplete="current-name"
                />
              </Div>
              <Div>
                <Content.Label>E-mail or phone number</Content.Label>
                <Content.Input
                  placeholder="Type your e-mail or phone number"
                  type="text"
                  autoComplete="current-email"
                />
              </Div>
              <Div>
                <Content.Label>Password</Content.Label>
                <Content.Input
                  placeholder="Type your password"
                  type="password"
                  autoComplete="current-password"
                />
                <Content.None>Must be 8 characters at least</Content.None>
              </Div>
              <Div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "10px",
                }}
              >
                <input type="checkbox" name="check" id="check" />
                <Content.P htmlFor="check">
                  By creating an account means you agree to the
                  <span>Terms and Conditions</span>, and our
                  <span>Privacy Policy</span>
                </Content.P>
              </Div>
              <Div>
                <Content.Button>Sign Up</Content.Button>
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
                Aldready have an account?{" "}
                <NavLink to="/signin">Sign In</NavLink>
              </Content.Next>
            </Div>
          </Content.Left>
          <Content.Right>
            <Content.Img src={signup} />
          </Content.Right>
        </Content>
      </div>
    </div>
  );
};

export default SignUp;
