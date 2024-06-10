import React from "react";
import { Content, Light, Component } from "./style";

const Title = React.forwardRef(
  ({ children, title, subtitle, button, $type, $border, component }, ref) => (
    <div ref={ref}>
      <Content>
        {title && (
          <Content.Title data-aos="fade-right" $type={$type} $border={$border}>
            {title}
          </Content.Title>
        )}
        {button && (
          <Content.Button data-aos="fade-left" $type={$type} display="top">
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
        <Content.Button data-aos="fade-left" display="bottom" $type={$type}>
          {button}
          <div className="abs"></div>
          <div className="arrow">
            <Light />
          </div>
        </Content.Button>
      )}
      {component && <Component display="bottom">{component}</Component>}
    </div>
  )
);

export default Title;
