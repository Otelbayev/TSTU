import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import signin from "../../assets/images/signin.png";
import { Content, Div } from "./style";
import useAxios from "../../hooks/useAxios";
import Cookies from "js-cookie";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";

const SignIn = () => {
  const { loading, sendRequest } = useAxios();
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const [error, setError] = useState(false);
  const [capcha, setCapcha] = useState({});
  const [capchaText, setCapchaText] = useState("");
  const emailRef = useRef(null);
  const pwRef = useRef(null);

  const token = import.meta.env.VITE_CAPCHA_TOKEN;

  const checkToken = async () => {
    try {
      const response = await sendRequest({
        method: "get",
        url: `${import.meta.env.VITE_BASE_URL_API}/user/verification`,
        headers: {
          Authorization: `Bearer ${Cookies.get("_token")}`,
        },
      });

      response.status === 200 && navigate(`/${i18n.language}/admin/home`);
    } catch (err) {
      setError(false);
    }
  };

  const getCapchaNums = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_BASE_URL_API}/captcha/getcaptchanumbers`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    res.status === 200 && setCapcha(res.data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    checkToken();
  }, []);

  useEffect(() => {
    getCapchaNums();
  }, [error]);

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      login: emailRef?.current?.value,
      password: pwRef?.current?.value,
      captchaNumbersSumm: capchaText,
    };
    try {
      const response = await sendRequest({
        method: "post",
        url: `${import.meta.env.VITE_BASE_URL_API}/user/login`,
        data: userData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        Cookies.set("_token", response.data.token, { expires: 1 });
        Cookies.set("_userDetails", JSON.stringify(response.data.userDetails), {
          expires: 1,
        });
        Cookies.set(
          "role",
          response.data?.userDetails?.user_type_?.type?.toLowerCase(),
          { expires: 1 }
        );

        navigate(`/${i18n.language}/admin/home`);
      }
    } catch (err) {
      setError(true);
      setCapchaText("");
    }
  };

  const redierectToHemis = () => {
    window.location.href =
      "https://hemis.tstu.uz/oauth/authorize?response_type=code&client_id=8&redirect_uri=http://localhost:5173/callback";
  };

  return (
    <div>
      <Helmet>
        <title>{t("login.title")}</title>
      </Helmet>
      <div className="root-container">
        <div className="root-wrapper">
          <Content data-aos="fade-up">
            <Content.Left>
              <Content.Title>{t("login.title")}</Content.Title>
              <Content.Form onSubmit={onFormSubmit}>
                <Div>
                  <Content.Label>{t("login.login")}</Content.Label>
                  <Content.Input
                    placeholder={t("login.login")}
                    type="text"
                    id="email"
                    name="email"
                    autoComplete="current-email"
                    ref={emailRef}
                    $error={error.toString()}
                    required
                    aria-required="true"
                    aria-label="Enter your email address"
                  />
                </Div>
                <Div>
                  <Content.Label>{t("login.pw")}</Content.Label>
                  <Content.Input
                    placeholder={t("login.pw")}
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    ref={pwRef}
                    $error={error.toString()}
                    required
                    aria-required="true"
                    aria-label="Enter your password"
                  />
                  <br />
                  <Content.Input
                    type="text"
                    value={capchaText}
                    onChange={(e) => setCapchaText(e.target.value)}
                    placeholder={`${capcha?.num1} + ${capcha?.num2}`}
                  />
                  <Content.Forgot>{t("login.forgot")}</Content.Forgot>
                </Div>
                <Div>
                  <Content.Button
                    disabled={loading}
                    $loading={loading.toString()}
                  >
                    {loading ? "loading..." : t("login.btn")}
                  </Content.Button>
                </Div>
                {/* <Div>
                  <button
                    disabled={loading}
                    $loading={loading.toString()}
                    className="btn btn-primary w-100 py-2"
                    type="submit"
                  >
                    {loading ? "loading..." : t("login.btn")}
                  </button>
                  <br />
                  <br />
                  <button
                    className="btn btn-outline-primary w-100 py-2 rounded-0"
                    type="button"
                    onClick={redierectToHemis}
                  >
                    Hemis orqali kirish
                  </button>
                </Div> */}
              </Content.Form>
            </Content.Left>
            <Content.Right>
              <Content.Img loading="lazy" src={signin} />
            </Content.Right>
          </Content>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
