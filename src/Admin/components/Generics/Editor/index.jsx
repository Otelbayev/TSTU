const Editor = ({ lan, id, name, className, defaultValue }) => {
  document.addEventListener("DOMContentLoaded", function () {
    $("#summernote").summernote();
  });
  return (
    <div className={className}>
      <label htmlFor="text_uz" className="col-sm-4 col-form-label">
        Text ({lan})
      </label>
      <div className="col-sm-12">
        <div id="summernote">Hello Summernote</div>
      </div>
    </div>
  );
};

export default Editor;
