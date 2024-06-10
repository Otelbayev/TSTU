import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import useAxios from "./../../../hooks/useAxios";

const BlogContext = createContext();

export const useBlogContext = () => useContext(BlogContext);

const BlogProvider = ({ children }) => {
  const { sendRequest } = useAxios();
  const token = `Bearer ${Cookies.get("_token")}`;
  const [blogs, setBlogs] = useState([]);
  const [blogCategoryOptions, setBlogCategoryOptions] = useState([]);

  async function getAllBlogs(value) {
    const response = await sendRequest({
      method: "get",
      url:
        value === "uz"
          ? "/api/blogcontroller/getallblogselect"
          : `/api/blogcontroller/getallblogtranslationselect/${value}`,
      headers: {
        Authorization: token,
      },
    });

    if (response.status === 200) {
      setBlogs([
        { value: "", label: "Blog", parent: null },
        ...response.data
          .sort((a, b) => a.id - b.id)
          .map((e) => ({ value: e.id, label: e.title, parent: e?.blog_id })),
      ]);
    }
  }

  async function getBlogCategorySelect(value) {
    const res = await sendRequest({
      method: "get",
      url:
        value === "uz"
          ? "/api/blogcategorycontroller/sitegetallblogcategory"
          : `/api/blogcategorycontroller/sitegetallblogcategorytranslation?language_code=${value}`,
      headers: {
        Authorization: token,
      },
    });
    res.status === 200 &&
      setBlogCategoryOptions(
        res.data
          .sort((a, b) => a.id - b.id)
          .map((e) => ({
            value: e.id,
            label: e.title,
            parent: e?.blog_category_id,
          }))
      );
  }

  return (
    <BlogContext.Provider
      value={{
        blogs,
        getAllBlogs,
        blogCategoryOptions,
        getBlogCategorySelect,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogProvider;
