import React from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  return (
    <div className="root-container">
      <div className="root-wrapper"></div>
    </div>
  );
};

export default Search;
