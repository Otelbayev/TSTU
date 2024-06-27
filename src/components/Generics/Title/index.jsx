import React from "react";
import { Content, Light, Component } from "./style";
import { useLanguageContext } from "../../../context/LanguageContext";
import { useNavigate } from "react-router-dom";

const Title = React.forwardRef(
  (
    { children, title, subtitle, button, $type, $border, component, to, link },
    ref
  ) => {
    const { language } = useLanguageContext();
    const navigate = useNavigate();

    return (
      <div ref={ref}>
        <Content>
          {title && (
            <Content.Title
              data-aos="fade-right"
              $type={$type}
              $border={$border}
            >
              {title}
            </Content.Title>
          )}
          {button && (
            <Content.Button
              onClick={() =>
                link
                  ? (window.location.href = link)
                  : navigate(`/${language}/${to}`)
              }
              data-aos="fade-left"
              $type={$type}
              display="top"
            >
              {button}
              <div className="abs"></div>
              <div className="arrow">
                <Light />
              </div>
            </Content.Button>
          )}
          {component && <Component display="top">{component}</Component>}
        </Content>
        {subtitle && (
          <Content.SubTitle data-aos="fade-right" $type={$type}>
            {subtitle}
          </Content.SubTitle>
        )}
        {children}
        {button && (
          <Content.Button
            onClick={() => navigate(`/${language}/${to}`)}
            data-aos="fade-left"
            display="bottom"
            $type={$type}
          >
            {button}
            <div className="abs"></div>
            <div className="arrow">
              <Light />
            </div>
          </Content.Button>
        )}
        {component && <Component display="bottom">{component}</Component>}
      </div>
    );
  }
);

export default Title;
