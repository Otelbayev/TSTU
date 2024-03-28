import React, { useEffect } from "react";
import img1 from "../../assets/Galereya/1.png";
import img2 from "../../assets/Galereya/2.png";
import img3 from "../../assets/Galereya/3.png";
import img4 from "../../assets/Galereya/4.png";
import img5 from "../../assets/Galereya/5.png";
import img6 from "../../assets/Galereya/6.png";
import img7 from "../../assets/Galereya/7.png";
import img8 from "../../assets/Galereya/2.png";
import img9 from "../../assets/Galereya/31.png";
import img10 from "../../assets/Galereya/32.png";
import img11 from "../../assets/Galereya/33.png";
import img12 from "../../assets/Galereya/34.png";
import img13 from "../../assets/Galereya/35.png";
import img14 from "../../assets/Galereya/36.png";
import img15 from "../../assets/Galereya/37.png";
import img16 from "../../assets/Galereya/38.png";
import img17 from "../../assets/Galereya/39.png";
import img18 from "../../assets/Galereya/40.png";
import img21 from "../../assets/Galereya/21.png";
import img22 from "../../assets/Galereya/22.png";
import img23 from "../../assets/Galereya/23.png";
import img24 from "../../assets/Galereya/24.png";
import img25 from "../../assets/Galereya/25.png";
import img26 from "../../assets/Galereya/26.png";
import img27 from "../../assets/Galereya/27.png";
import img28 from "../../assets/Galereya/28.png";
import img41 from "../../assets/Galereya/41.png";
import img42 from "../../assets/Galereya/42.png";
import img51 from "../../assets/Galereya/51.png";
import img52 from "../../assets/Galereya/52.png";
import img53 from "../../assets/Galereya/53.png";
import img54 from "../../assets/Galereya/54.png";
import icon from "../../assets/Galereya/btn.png";
import { Absolute, Grid, Header, Showcase } from "./style";
import { NavLink } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { Lang, Title } from "../../components/Generics";

const Galereya = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      className="root-container"
      style={{ background: "var(--white)", padding: "20px 0" }}
    >
      <div className="root-wrapper">
        <Header data-aos="fade-down">
          <NavLink to="/">
            <Header.Logo />
          </NavLink>
          <Header.Right>
            <Header.Link>Kategoriya</Header.Link>
            <Header.Link>3D galereya</Header.Link>
            <Header.Link>Tadbirlardan</Header.Link>
            <Header.Link>Umumiy</Header.Link>
            <Header.Link>
              <Lang mode="light" />
            </Header.Link>
          </Header.Right>
        </Header>
        <Showcase data-aos="fade-up">
          <Absolute>
            <Absolute.Title>
              Transport Universiteti hayoti rasmlarda
            </Absolute.Title>
            <Absolute.Desc>
              Lorem ipsum dolor sit amet consectetur. Non diam turpis adipiscing
              velit suspendisse. Sed mauris erat ornare mattis donec. Arcu
              consequat tincidunt felis faucibus et aliquam.
            </Absolute.Desc>
            <Absolute.Btn type="primary">
              <img src={icon} alt="" />
              universitetga <br /> 3d sayohat
            </Absolute.Btn>
          </Absolute>
          <Grid $col={4} $row={4}>
            <Grid.Item
              data-aos="zoom-in"
              src={img1}
              $col={"4/5"}
              $row={"1/2"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img2}
              $col={"4/5"}
              $row={"2/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img3}
              $col={"4/5"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img4}
              $col={"3/4"}
              $row={"2/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img5}
              $col={"2/3"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img8}
              $col={"1/2"}
              $row={"4/5"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img7}
              $col={"2/3"}
              $row={"4/5"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img6}
              $col={"3/5"}
              $row={"4/5"}
            />
          </Grid>
        </Showcase>
        <Title title="Sara rasmlar" button="Barchasini ko‘rish">
          <Grid $col={4} $row={4}>
            <Grid.Item
              data-aos="zoom-in"
              src={img6}
              $col={"1/3"}
              $row={"1/2"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img21}
              $col={"3/4"}
              $row={"1/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img22}
              $col={"4/5"}
              $row={"1/2"}
            />

            <Grid.Item
              data-aos="zoom-in"
              src={img23}
              $col={"1/2"}
              $row={"2/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img24}
              $col={"2/3"}
              $row={"2/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img25}
              $col={"4/5"}
              $row={"2/3"}
            />

            <Grid.Item
              data-aos="zoom-in"
              src={img26}
              $col={"1/2"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img27}
              $col={"2/3"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img28}
              $col={"3/5"}
              $row={"3/4"}
            />
          </Grid>
        </Title>
        <Title title="Sara rasmlar" button="Barchasini ko‘rish">
          <Grid $col={4} $row={4}>
            <Grid.Item
              data-aos="zoom-in"
              src={img9}
              $col={"1/2"}
              $row={"1/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img10}
              $col={"2/3"}
              $row={"1/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img11}
              $col={"3/4"}
              $row={"1/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img12}
              $col={"4/5"}
              $row={"1/4"}
            />

            <Grid.Item
              data-aos="zoom-in"
              src={img13}
              $col={"1/2"}
              $row={"4/5"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img14}
              $col={"2/3"}
              $row={"4/5"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img15}
              $col={"3/5"}
              $row={"4/5"}
            />

            <Grid.Item
              data-aos="zoom-in"
              src={img16}
              $col={"1/3"}
              $row={"5/6"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img17}
              $col={"3/4"}
              $row={"5/6"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img18}
              $col={"4/5"}
              $row={"5/6"}
            />
          </Grid>
        </Title>
        <Title title="3D rasm" button="Barchasini ko‘rish">
          <Grid $col={4}>
            <Grid.Item
              data-aos="zoom-in"
              src={img41}
              $col={"1/5"}
              $row={"1/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img42}
              $col={"1/2"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img42}
              $col={"2/3"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img42}
              $col={"3/4"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img42}
              $col={"4/5"}
              $row={"3/4"}
            />
          </Grid>
        </Title>
        <Pagination
          current={1}
          style={{ textAlign: "center", margin: "25px 0" }}
          total={30}
        />
        <Title title="Tadbirlardan" button="Barchasini ko‘rish">
          <Grid $col={3}>
            <Grid.Item
              data-aos="zoom-in"
              src={img51}
              $col={"1/3"}
              $row={"1/2"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img52}
              $col={"3/4"}
              $row={"1/2"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img53}
              $col={"1/2"}
              $row={"2/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img54}
              $col={"2/4"}
              $row={"2/3"}
            />
          </Grid>
        </Title>
        <Title title="Umumiy" button="Barchasini ko‘rish">
          <Grid style={{ margin: "10px 0" }} $col={4}>
            <Grid.Item
              data-aos="zoom-in"
              src={img6}
              $col={"1/3"}
              $row={"1/2"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img21}
              $col={"3/4"}
              $row={"1/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img22}
              $col={"4/5"}
              $row={"1/2"}
            />

            <Grid.Item
              data-aos="zoom-in"
              src={img23}
              $col={"1/2"}
              $row={"2/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img24}
              $col={"2/3"}
              $row={"2/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img25}
              $col={"4/5"}
              $row={"2/3"}
            />

            <Grid.Item
              data-aos="zoom-in"
              src={img26}
              $col={"1/2"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img27}
              $col={"2/3"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img28}
              $col={"3/5"}
              $row={"3/4"}
            />
          </Grid>
          <Grid style={{ margin: "10px 0" }} $col={4}>
            <Grid.Item
              data-aos="zoom-in"
              src={img6}
              $col={"1/3"}
              $row={"1/2"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img21}
              $col={"3/4"}
              $row={"1/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img22}
              $col={"4/5"}
              $row={"1/2"}
            />

            <Grid.Item
              data-aos="zoom-in"
              src={img23}
              $col={"1/2"}
              $row={"2/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img24}
              $col={"2/3"}
              $row={"2/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img25}
              $col={"4/5"}
              $row={"2/3"}
            />

            <Grid.Item
              data-aos="zoom-in"
              src={img26}
              $col={"1/2"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img27}
              $col={"2/3"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img28}
              $col={"3/5"}
              $row={"3/4"}
            />
          </Grid>
          <Grid style={{ margin: "10px 0" }} $col={4}>
            <Grid.Item
              data-aos="zoom-in"
              src={img6}
              $col={"1/3"}
              $row={"1/2"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img21}
              $col={"3/4"}
              $row={"1/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img22}
              $col={"4/5"}
              $row={"1/2"}
            />

            <Grid.Item
              data-aos="zoom-in"
              src={img23}
              $col={"1/2"}
              $row={"2/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img24}
              $col={"2/3"}
              $row={"2/3"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img25}
              $col={"4/5"}
              $row={"2/3"}
            />

            <Grid.Item
              data-aos="zoom-in"
              src={img26}
              $col={"1/2"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img27}
              $col={"2/3"}
              $row={"3/4"}
            />
            <Grid.Item
              data-aos="zoom-in"
              src={img28}
              $col={"3/5"}
              $row={"3/4"}
            />
          </Grid>
        </Title>
      </div>
    </div>
  );
};

export default Galereya;
