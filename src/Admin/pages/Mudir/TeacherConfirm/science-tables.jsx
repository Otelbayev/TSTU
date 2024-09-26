import React from "react";
import ConfirmComponent from "./confirm-component";

const ScienceTable = () => {
  return (
    <ConfirmComponent
      title="O'qituvchilarni Bloglarini tasdiqlash."
      url="/personscientificactivity/getallpersonscientificactivitydep"
      con="/personscientificactivity"
    />
  );
};

export default ScienceTable;
