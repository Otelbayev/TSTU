import Additionals from "../additionals";

const Blog = () => (
  <Additionals
    title="Blog"
    get="/personblog/getallpersonblogsite"
    del="/personblog/deletepersonblog"
    edit="blog/edit"
  />
);

export default Blog;
