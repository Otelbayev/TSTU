import React from "react";
import { Container } from "./style";
import { NavLink } from "react-router-dom";
import { Content } from "./style";

const Footer = () => {
  return (
    <Container>
      <div className="root-container">
        <div className="root-wrapper">
          <Content data-aos="fade-up">
            <Content.Item>
              <Content.P>
                Cursus risus at ultrices mi tempus. Varius vel pharetra vel
                turpis nunc eget lorem dolor sed. Porttitor lacus luctus
                accumsan tortor posuere ac ut consequat
              </Content.P>
              <Content.Media>
                <NavLink>
                  <Content.Facebook />
                </NavLink>
                <NavLink>
                  <Content.Whatsapp />
                </NavLink>
                <NavLink>
                  <Content.Twitter />
                </NavLink>
                <NavLink>
                  <Content.Instagram />
                </NavLink>
              </Content.Media>
            </Content.Item>
            <Content.Item>
              <Content.Title>Popular Links</Content.Title>
              <Content.Link>About</Content.Link>
              <Content.Link>Features</Content.Link>
              <Content.Link>Team</Content.Link>
              <Content.Link>Blog</Content.Link>
              <Content.Link>Blog</Content.Link>
            </Content.Item>
            <Content.Item>
              <Content.Title>Popular Links</Content.Title>
              <Content.Link>About</Content.Link>
              <Content.Link>Features</Content.Link>
              <Content.Link>Team</Content.Link>
              <Content.Link>Blog</Content.Link>
              <Content.Link>Blog</Content.Link>
            </Content.Item>
            <Content.Item>
              <Content.Title>Contacts</Content.Title>
              <Content.P>
                Feugiat nisl pretium fusce id velit ut tortor pretium viverra.
                Nunc pulvinar sapien et ligula ullamcorper proin
              </Content.P>
              <Content.Contact>
                <Content.Phone />
                <div>
                  <div>(101) 222 123 456</div>
                  <div>(101) 222 123 456</div>
                </div>
              </Content.Contact>
              <Content.Contact>
                <Content.Email />
                <div>
                  <div>company@saas.com</div>
                  <div>support@saas-stakk.com</div>
                </div>
              </Content.Contact>
            </Content.Item>
            <Content.Item>
              <Content.Title>Our Lcation</Content.Title>
              <Content.Loc
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.452934345451!2d69.2794727752257!3d41.277245902821036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8aac316ee659%3A0xc5be678c10cbba9b!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQk9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0KLRgNCw0L3RgdC_0L7RgNGC0L3Ri9C5INCj0L3QuNCy0LXRgNGB0LjRgtC10YI!5e0!3m2!1sru!2s!4v1707564804707!5m2!1sru!2s"
                loading="lazy"
              />
            </Content.Item>
          </Content>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
