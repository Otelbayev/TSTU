import React, { useEffect } from "react";
import BlogPage from "../../components/BlogPage";
import { useBlog } from "../../hooks/useBog";

const Oav = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data, loading, error } = useBlog("OAV biz haqimizda", false);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (!loading && error) {
    return <h1 className="text-center">Error!</h1>;
  }

  return <BlogPage data={data} title={"oav"} />;
};

export default Oav;
