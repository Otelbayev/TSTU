import React, { useEffect } from "react";
import { useBlog } from "./../../hooks/useBog";
import BlogPage from "../../components/BlogPage";

const Education = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, loading, error } = useBlog("Ta'lim", false);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (!loading && error) {
    return <h1 className="text-center">Error!</h1>;
  }

  return <BlogPage title="talim.title" data={data} />;
};

export default Education;
