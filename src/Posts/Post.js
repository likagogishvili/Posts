import { ThemeProvider, createTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Link from "@mui/material/Link";
import "./styles/posts.scss";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

function Post() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostIndex, lastPostIndex);

  const RenderPosts = currentPosts.map((item) => {
    return (
      <Card key={item.id} sx={{ maxWidth: 345, mt: 2 }}>
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
              // onClick={GoToResetPassword}
            >
              by author
            </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  });
  console.log(currentPage);
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
        <Pagination
          count={Math.ceil(posts.length / postsPerPage)}
          onClick={(e) => setCurrentPage(e.target.textContent)}
          color="primary"
        />
      </Stack>
    </ThemeProvider>
  );
}
export default Post;
