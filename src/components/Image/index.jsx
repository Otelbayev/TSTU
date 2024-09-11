import React, { useState } from "react";

const Image = ({ src, alt, className }) => {
  const [loading, setLoading] = useState(true);

  return (
    <img
      src={src}
      onLoad={() => setLoading(false)}
      alt={alt || "image"}
      className={className}
      loading="lazy"
      style={{
        filter: loading ? "blur(10px)" : "none",
        transform: loading ? "scale(1.5)" : "scale(1)",
        transition: "0.5s ease",
      }}
    />
  );
};

export default Image;
