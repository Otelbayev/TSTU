import React, { useEffect, useRef, useState } from "react";
import {
  ChooseFile,
  Editor,
  FileImg,
  Input,
  Select,
  TextArea,
} from "../../../components/Generics";
import { useNavigate } from "react-router-dom";
import LanguageSelect from "../../../components/Generics/LanguageSelect";
import { useLanguageContext } from "../../../../context/LanguageContext";
import { useBlogContext } from "./../../../context/BlogContext/index";
import { useCreate } from "./../../../hooks/useCreate";
import Wrapper from "../../../components/Wrapper";

const Create = () => {
  const [value, setValue] = useState("uz");
  const navigate = useNavigate();

  const editorRef = useRef(null);
  const titleRef = useRef(null);
  const shortRef = useRef(null);
  const descRef = useRef(null);
  const positionRef = useRef(null);
  const imgRef = useRef(null);
  const date1Ref = useRef(null);
  const date2Ref = useRef(null);

  const [favorite, setFavorite] = useState(2);
  const [blogValue, setBlogValue] = useState(null);

  const { language, options } = useLanguageContext();
  const { blogCategoryOptions, getBlogCategorySelect } = useBlogContext();
  const id = options.find((option) => option.code === value)?.id;

  const onHandleSubmit = async (e) => {
    e.preventDefault();

    const titleValue = titleRef?.current?.value;
    const shortValue = shortRef?.current?.value;
    const descValue = descRef?.current?.value;
    const editorCode = $(editorRef.current)?.summernote("code");
    const position = positionRef?.current?.value;
    const img_up = imgRef.current?.files[0] || null;

    const formData = new FormData();
    formData.append("title_short", shortValue);
    formData.append("title", titleValue);
    formData.append("description", descValue);
    formData.append("text", editorCode);
    formData.append("img_up", img_up);
    formData.append("position", position);
    formData.append("favorite", favorite === 1 ? true : false);
    formData.append("event_date", date1Ref?.current?.value || "2000-01-01");
    formData.append("event_end_date", date2Ref?.current?.value || "2000-01-01");
    if (value === "uz") {
      formData.append("blog_category_id", blogValue);
    } else {
      formData.append(
        "blog_category_id",
        blogCategoryOptions.find((e) => e.value === blogValue)?.parent
      );
    }

    const res = await useCreate(
      value,
      "formData",
      formData,
      "/api/blogcontroller/createblog",
      "/api/blogcontroller/createblogtranslation",
      "blog_id",
      [{ blog_category_translation_id: blogValue }, { language_id: id }],
      ["blog_category_id"]
    );

    // res?.statusCode === 200 && navigate(`/${language}/admin/blogs`);
  };

  useEffect(() => {
    getBlogCategorySelect(value);
  }, [value]);

  useEffect(() => {
    blogCategoryOptions?.length
      ? setBlogValue(blogCategoryOptions[0].value)
      : setBlogValue(null);
  }, [blogCategoryOptions]);

  return (
    <Wrapper title="Create Blog">
      <form className="form-horizontal row" onSubmit={onHandleSubmit}>
        <div className="col-md-12">
          <LanguageSelect onChange={(e) => setValue(e)} />
        </div>
        <TextArea
          className="form-group col-md-4 card-header"
          label={`Title (${value})`}
          ref={titleRef}
        />
        <TextArea
          className="form-group col-md-4 card-header"
          label={`Short Title (${value})`}
          ref={shortRef}
        />
        <TextArea
          className="form-group col-md-4 card-header"
          label={`Description (${value})`}
          ref={descRef}
        />
        <Editor
          className="form-group col-md-6 card-header"
          lan={value}
          ref={editorRef}
        />
        <Input
          label="Event data"
          type="date"
          className="form-group col-md-3 mt-4"
          ref={date1Ref}
        />
        <Input
          label="Event end data"
          type="date"
          className="form-group col-md-3 mt-4"
          ref={date2Ref}
        />
        <FileImg
          className="form-group col-md-6"
          lan={value}
          editorRef={editorRef}
        />
        <ChooseFile
          label="Image"
          className="form-group col-md-6"
          ref={imgRef}
        />
        <Select
          label="Blog Category"
          className={"col-md-4"}
          options={blogCategoryOptions}
          value={blogValue}
          onChange={(e) => setBlogValue(e)}
        />
        <Input
          label="Position"
          className="form-group col-md-4"
          type="number"
          ref={positionRef}
        />
        <Select
          label="Favorite"
          className="col-md-4"
          options={[
            { value: 1, label: "true" },
            { value: 2, label: "false" },
          ]}
          value={favorite}
          onChange={(e) => setFavorite(e)}
        />
        <div className="form-group mt-3 col-md-12">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-success">
              Create
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default Create;
