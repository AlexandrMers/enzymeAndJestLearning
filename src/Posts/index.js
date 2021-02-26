import React, { useState } from "react";

import Post from "../Post";
import Title from "../Title";
import Select from "../Select";
import Input from "../Input";

import { HITS, NEWS } from "./constants";

const Posts = () => {
  const [searchQuery, changeSearchQuery] = useState("");
  const [hitsPerPage, setHitsPerPage] = useState(20);
  const [page, setPage] = useState(0);

  const handleHitsChange = ({ target: { value } }) => {
    setHitsPerPage(() => +value);
    setPage(0);
  };

  const handleInputChange = ({ target: { value } }) => {
    changeSearchQuery(value);
  };

  const getSearch = ({ key }) => {
    if (key === "Enter") {
      setPage(0);
    }
  };

  return (
    <div className="wrapper">
      <Title title="Hacker News" />
      <Select
        options={HITS}
        handleChange={handleHitsChange}
        value={hitsPerPage}
      />
      <Input
        onKeyPress={getSearch}
        onChange={handleInputChange}
        value={searchQuery}
      />
      <ul className="newsList">
        {NEWS.map(
          ({
            author,
            created_at,
            num_comments,
            objectID,
            title,
            points,
            url,
          }) => (
            <Post
              key={objectID}
              author={author}
              created_at={created_at}
              title={title}
              points={points}
              num_comments={num_comments}
              url={url}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default Posts;
