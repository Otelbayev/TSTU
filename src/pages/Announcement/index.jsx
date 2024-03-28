import React, { useEffect } from "react";

const Announcement = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div>Announcement</div>;
};

export default Announcement;
