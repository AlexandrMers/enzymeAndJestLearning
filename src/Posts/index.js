import React from "react";
import Post from "../Post";

/**
 * @var {
 *   Array.<{
 *   author: String;
 *   created_at: String;
 *   num_comments: Number;
 *   objectID: String;
 *   title: String;
 *   points: Number;
 *   url: String;
 * }>
 * }
 */
const NEWS = [
  {
    url: "//test.url",
    points: 100,
    title: "title 1nd new",
    created_at: "Thu Feb 25 2021 20:44:15",
    author: "Alexandr Awdeev",
    objectID: "1d1d1d",
    num_comments: 10,
  },
  {
    url: "//spstre.url",
    points: 123,
    title: "title 2nd new",
    created_at: "Thu Feb 21 2021 20:44:15",
    author: "Stepan Chernytzev",
    objectID: "2d2d2d",
    num_comments: 13,
  },
];

const Posts = () => (
  <ul className="newsList">
    {NEWS.map(
      ({ author, created_at, num_comments, objectID, title, points, url }) => (
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
);

export default Posts;
