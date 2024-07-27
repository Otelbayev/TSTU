import React, { useEffect } from "react";
import { useBlog } from "../../hooks/useBog";
import BlogPage from "../../components/BlogPage";

const Announcements = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, loading, error } = useBlog("E'lon", false);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (!loading && error) {
    return <h1 className="text-center">Error!</h1>;
  }

  return <BlogPage title="elon" data={data} />;
};

export default Announcements;
