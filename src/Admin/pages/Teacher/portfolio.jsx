import React, { useRef } from "react";
import Wrapper from "../../components/Wrapper";
import { Editor, Input } from "../../components/Generics";
import axios from "axios";
import { message } from "antd";
import Cookies from "js-cookie";

const Portfolio = () => {
  const editorRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      message.loading({ key: "key", content: "Loading..." });
      const res = await axios.post(
        `${
          import.meta.env.VITE_BASE_URL_API
        }/personportfolio/createpersonportfolio`,
        {
          title: titleRef?.current?.value,
          description: descRef?.current?.value,
          text: $(editorRef.current)?.summernote("code"),
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies("_token")}`,
          },
        }
      );
      res.status === 200 &&
        message.success({ key: "key", content: "Success!" });
    } catch (err) {
      message.error({ key: "key", content: "Xatolik" });
    }
  };

  return (
    <Wrapper title="Portfolio">
      <div className="form-group">
        <form onSubmit={handleSubmit} className="row">
          <Input ref={titleRef} className="form-group col-md-4" label="Title" />
          <Input
            ref={descRef}
            className="form-group col-md-4"
            label="Description"
          />
          <Editor ref={editorRef} className="col-md-4" />
          <div className="col-md-12">
            <button className="btn btn-success" type="submit">
              Create
            </button>
          </div>
        </form>
        <div className="col-md-12 mt-3"></div>
      </div>
    </Wrapper>
  );
};

export default Portfolio;
