import React from "react";
import { Image } from "antd";
import parse from "html-react-parser";
import { FaRegEye } from "react-icons/fa";

const HtmlContentRenderer = ({ htmlContent, className }) => {
  const transform = (node) => {
    if (node.type === "tag" && node.name === "img") {
      const { src, alt } = node.attribs;
      return (
        <Image
          preview={{
            mask: (
              <span
                style={{
                  fontSize: "16px",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  gap: "3px",
                }}
              >
                <FaRegEye size={"15px"} /> Ko'rish
              </span>
            ),
          }}
          src={src}
          alt={alt || "Image"}
        />
      );
    }
  };

  const content = parse(htmlContent, { replace: transform });

  return (
    <div data-aos="fade-up" className={className}>
      {content}
    </div>
  );
};

export default HtmlContentRenderer;
