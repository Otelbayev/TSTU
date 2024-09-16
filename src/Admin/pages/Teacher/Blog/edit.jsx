import Additionals from "../additionals-edit";

const Edit = () => (
  <Additionals
    title="Portfolio O'zgartirish"
    updUrl="/personblog/updatepersonblog"
    updUrlTrans="/personblog/updatepersonblogtranslation"
    createTrans="/personblog/createpersonblogtranslation"
    byId="/personblog/getbyidpersonblog"
    byIdTrans="/personblog/getbyidpersonblogtranslationuzid"
  />
);

export default Edit;
