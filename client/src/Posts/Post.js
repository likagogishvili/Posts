import * as muiForPossts from "./styles/muiForPosts";
import "./styles/posts.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { counterActions } from "../store/index";
import { useNavigate } from "react-router";
import Header from "../Header/Header";

function Post() {
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  let navigate = useNavigate();
  const [author, setAuthor] = useState("");
  const [selectedPost, setSelectedPost] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  function GetAuthor(id) {
    return users.filter((user) => user.id === id)[0].name;
  }
  function GetToAuthorPage(e) {
    setAuthor(e.target.id);
    setTimeout(() => {
      navigate("/Author");
    }, 2);
  }

  function GoToClickedPost(e) {
    setSelectedPost(e.target.id);
  }
  useEffect(() => {
    if (selectedPost.length !== 0) {
      navigate(`/Post/${selectedPost}`);
    }
    // eslint-disable-next-line
  }, [selectedPost]);
  const RenderPosts = currentPosts.map((item) => {
    return (
      <muiForPossts.Card
        key={item.id}
        sx={{
          maxWidth: 345,
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <muiForPossts.CardActionArea>
          <muiForPossts.CardMedia
            component="img"
            mineight="100"
            image="https://images.pexels.com/photos/13081133/pexels-photo-13081133.jpeg?cs=srgb&dl=pexels-ylanite-koppens-13081133.jpg&fm=jpg&_gl=1*1xhk6vy*_ga*NzUxNzEyODQyLjE2NjYxODMwMTQ.*_ga_8JE65Q40S6*MTY2NjI0ODIwNS4yLjEuMTY2NjI0ODIyNS4wLjAuMA.."
            alt="green iguana"
          />
          <muiForPossts.CardContent>
            <muiForPossts.Typography gutterBottom variant="h5" component="div">
              {item.title}
            </muiForPossts.Typography>
            <muiForPossts.Typography variant="body2" color="text.secondary">
              {item.body}
            </muiForPossts.Typography>
            <muiForPossts.Link
              sx={{ mt: 3, float: "right", mb: 3 }}
              id={item.userId}
              onClick={GetToAuthorPage}
            >
              {GetAuthor(item.userId)}
            </muiForPossts.Link>
          </muiForPossts.CardContent>
        </muiForPossts.CardActionArea>
        <muiForPossts.Button
          variant="outlined"
          sx={{ float: "right" }}
          id={item.id}
          onClick={(e) => GoToClickedPost(e)}
        >
          Go To Post Page
        </muiForPossts.Button>
      </muiForPossts.Card>
    );
  });

  //adding posts and users data in redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(counterActions.SetAuthorRedux(author));
    dispatch(counterActions.SetselectedPostRedux(selectedPost));
  }, [author, selectedPost, dispatch]);

  return (
    <div>
      <Header />
      <div className="post">
        {posts.length ? (
          RenderPosts
        ) : (
          <muiForPossts.CircularProgress sx={{ width: 330, m: "auto", pt: 4, pb: 4 }} />
        )}
      </div>
      <muiForPossts.Stack sx={{ maxWidth: 345, m: "auto", pt: 4, pb: 4 }}>
        {posts.length ? (
          <muiForPossts.Pagination
            count={Math.ceil(posts.length / postsPerPage)}
            onClick={(e) => setCurrentPage(e.target.textContent)}
            color="primary"
          />
        ) : (
          ""
        )}
      </muiForPossts.Stack>
    </div>
  );
}
export default Post;
