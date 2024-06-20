import React, { useEffect } from "react";
import Dekans from "../../components/Faculties/Dekan";
import b from "../../assets/Faculties/boshliqd.png";
import no from "../../assets/Faculties/no.png";
import { Title } from "../../components/Generics";

const DepartmentID = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="root-container">
      <div className="root-wrapper">
        <br />
        <br />
        <Title title="Bo‘lim boshlig‘i" $border={"none"} />
        <Dekans
          img={b}
          name={"Lorem lorem lorem lorem lorem"}
          position={"Lorem lorem lorem"}
          phone={"+99871 299 00 10"}
          email={"marufdzhan.rasulov@bk.ru"}
          li={[
            "1976-1981 yy. – Toshkent temir yо‘l muhandislari instituti talabasi;",
            "1976-1981 yy. – Toshkent temir yо‘l muhandislari instituti talabasi",
          ]}
          button={""}
        />
        <br />
        <Title title="Boshqarmaning asosiy vazifalari" $border={"none"} />

        <br />
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          survival strategies to ensure proactive domination. At the end of the
          day, going forward, a new normal that has evolved from generation X is
          on the runway heading towards a streamlined cloud solution. User
          generated content in real-time will have multiple touchpoints for
          offshoring. Capitalize on low hanging fruit to identify a ballpark
          value added activity to beta test. Override the digital divide with
          additional clickthroughs from DevOps. Nanotechnology immersion along
          the information highway will close the loop on focusing solely on the
          bottom line. Leverage agile frameworks to provide a robust synopsis
          for high level overviews. Iterative approaches to corporate strategy
          foster collaborative thinking to further the overall value
          proposition. Organically grow the holistic world view of disruptive
          innovation via workplace diversity and empowerment. Bring to the table
          win-win survival strategies to ensure proactive domination. At the end
          of the day, going forward, a new normal that has evolved from
          generation X is on the runway heading towards a streamlined cloud
          solution. User generated content in real-time will have multiple
          touchpoints for offshoring. Capitalize on low hanging fruit to
          identify a ballpark value added activity to beta test. Override the
          digital divide with additional clickthroughs from DevOps.
          Nanotechnology immersion along the information highway will close the
          loop on focusing solely on the bottom line. Leverage agile frameworks
          to provide a robust synopsis for high level overviews. Iterative
          approaches to corporate strategy foster collaborative thinking to
          further the overall value proposition. Organically grow the holistic
          world view of disruptive innovation via workplace diversity and
          empowerment. Bring to the table win-win survival strategies to ensure
          proactive domination. At the end of the day, going forward, a new
          normal that has evolved from generation X is on the runway heading
          towards a streamlined cloud solution. User generated content in
          real-time will have multiple touchpoints for offshoring. Capitalize on
          low hanging fruit to identify a ballpark value added activity to beta
          test.
        </p>

        <br />
        <img loading="lazy" src={no} style={{ width: "100%", height: "100%" }} alt="" />
        <br />
        <p>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          survival strategies to ensure proactive domination. At the end of the
          day, going forward, a new normal that has evolved from generation X is
          on the runway heading towards a streamlined cloud solution. User
          generated content in real-time will have multiple touchpoints for
          offshoring. Capitalize on low hanging fruit to identify a ballpark
          value added activity to beta test. Override the digital divide with
          additional clickthroughs from DevOps. Nanotechnology immersion along
          the information highway will close the loop on focusing solely on the
          bottom line. Leverage agile frameworks to provide a robust synopsis
          for high level overviews. Iterative approaches to corporate strategy
          foster collaborative thinking to further the overall value
          proposition. Organically grow the holistic world view of disruptive
          innovation via workplace diversity and empowerment. Bring to the table
          win-win survival strategies to ensure proactive domination. At the end
          of the day, going forward, a new normal that has evolved from
          generation X is on the runway heading towards a streamlined cloud
          solution. User generated content in real-time will have multiple
          touchpoints for offshoring. Capitalize on low hanging fruit to
          identify a ballpark value added activity to beta test. Override the
          digital divide with additional clickthroughs from DevOps.
          Nanotechnology immersion along the information highway will close the
          loop on focusing solely on the bottom line.
        </p>
        <br />
      </div>
    </div>
  );
};

export default DepartmentID;
