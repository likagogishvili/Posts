import * as React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { counterActions } from "../store/index";
import axios from "axios";
import "./styles/posts.scss";
import Post from "./Post";

function Posts() {
  const [posts, setPost] = useState([]);
  const [users, setUsers] = useState([]);
  let postsUrl = "https://jsonplaceholder.typicode.com/posts";
  let usersUrl = "https://jsonplaceholder.typicode.com/users";

  //get post and users data from api
  useEffect(() => {
    axios.get(postsUrl).then((response) => {
      setPost(response.data);
    });
    axios.get(usersUrl).then((response) => {
      setUsers(response.data);
    });
  }, [usersUrl, postsUrl]);

  //adding posts and users data in redux
  const dispatch = useDispatch();
  useEffect(() => {
    if (posts.length && users.length) {
      dispatch(counterActions.SetPostsInRedux(posts));
      dispatch(counterActions.SetUsersRedux(users));
    }
  }, [posts, users, dispatch]);

  return (
    <div className="posts">
      <div className="postContainer">
        <Post />
      </div>
    </div>
  );
}
export default Posts;
