import { ThemeProvider, createTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import "./styles/posts.scss";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { counterActions } from "../store/index";
import { useNavigate } from "react-router";
import Button from "@mui/material/Button";
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
    setTimeout(() => {
      navigate("/Post");
    }, 2);
  }

  const RenderPosts = currentPosts.map((item) => {
    return (
      <Card
        key={item.id}
        sx={{
          maxWidth: 345,
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            mineight="100"
            image="https://images.pexels.com/photos/13081133/pexels-photo-13081133.jpeg?cs=srgb&dl=pexels-ylanite-koppens-13081133.jpg&fm=jpg&_gl=1*1xhk6vy*_ga*NzUxNzEyODQyLjE2NjYxODMwMTQ.*_ga_8JE65Q40S6*MTY2NjI0ODIwNS4yLjEuMTY2NjI0ODIyNS4wLjAuMA.."
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.body}
            </Typography>
            <Link
              sx={{ mt: 3, float: "right", mb: 3 }}
              id={item.userId}
              onClick={GetToAuthorPage}
            >
              {GetAuthor(item.userId)}
            </Link>
          </CardContent>
        </CardActionArea>
        <Button
          variant="outlined"
          sx={{ float: "right" }}
          id={item.id}
          onClick={(e) => GoToClickedPost(e)}
        >
          Go To Post Page
        </Button>
      </Card>
    );
  });

  //adding posts and users data in redux
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(counterActions.SetAuthorRedux(author));
    dispatch(counterActions.SetselectedPostRedux(selectedPost));
  }, [author, selectedPost, dispatch]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className="post">
        {posts.length ? (
          RenderPosts
        ) : (
          <CircularProgress sx={{ width: 330, m: "auto", pt: 4, pb: 4 }} />
        )}
      </div>
      <Stack sx={{ maxWidth: 345, m: "auto", pt: 4, pb: 4 }}>
        {posts.length ? (
          <Pagination
            count={Math.ceil(posts.length / postsPerPage)}
            onClick={(e) => setCurrentPage(e.target.textContent)}
            color="primary"
          />
        ) : (
          ""
        )}
      </Stack>
    </ThemeProvider>
  );
}
export default Post;
