import React from "react";
import BlogPage from "./../../components/BlogPage/index";
import { useBlog } from "../../hooks/useBog";

const Events = () => {
  const { data, loading, error } = useBlog("Kutilayotgan tadbirlar", false);

  if (loading) {
    return <h1 className="text-center">Loading...</h1>;
  }

  if (!loading && error) {
    return <h1 className="text-center">Error!</h1>;
  }

  return <BlogPage title="events.title" data={data} />;
};

export default Events;
