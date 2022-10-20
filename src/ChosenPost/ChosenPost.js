import * as React from "react";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import Comments from "./Comments";

function ChosenPost() {
  const post = useSelector((state) => state.selectedPost);
  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);
  const [comments, setComments] = useState();
  const [showMore, SetShowMore] = useState();

  let commentsURL = "https://jsonplaceholder.typicode.com/comments";
  let filteredPost = posts?.filter((item) => {
    return item.id === parseInt(post);
  });
  let postAuthor = users?.filter((item) => {
    return item.id === filteredPost[0].userId;
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    axios.get(commentsURL).then((response) => {
      setComments(response.data);
    });
  }, [commentsURL]);
  let filteredComments;
  if (showMore) {
    filteredComments = comments?.filter((item) => {
      return item.postId === parseInt(post);
    });
  } else {
    filteredComments = comments
      ?.filter((item) => {
        return item.postId === parseInt(post);
      })
      .slice(0, 3);
  }

  let renderFilteredComments = filteredComments?.map((item) => {
    return (
      <Comments
        title={item.title}
        email={item.email}
        name={item.name}
        body={item.body}
        key={item.id}
      />
    );
  });

  console.log(filteredComments);

  return (
    <div className="posts">
      <div className="postContainer">
        <ThemeProvider theme={darkTheme}>
          <Card
            sx={{
              display: "flex",
              width: "40%",
              justifyContent: "space-between",
              margin: "auto",
              mt: 4,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  {filteredPost[0].title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {filteredPost[0].body}
                </Typography>

                <Typography component="div" variant="h6">
                  Author:
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {postAuthor[0].name}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {postAuthor[0].email}
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: "35%" }}
              image="https://images.pexels.com/photos/13081133/pexels-photo-13081133.jpeg?cs=srgb&dl=pexels-ylanite-koppens-13081133.jpg&fm=jpg&_gl=1*1xhk6vy*_ga*NzUxNzEyODQyLjE2NjYxODMwMTQ.*_ga_8JE65Q40S6*MTY2NjI0ODIwNS4yLjEuMTY2NjI0ODIyNS4wLjAuMA.."
              alt="Live from space album cover"
            />
          </Card>

          <Card style={{ padding: "40px 20px" }} sx={{ mt: 3 }}>
            {renderFilteredComments}
            <Button
              variant="contained"
              sx={{ m: "auto", float: "right" }}
              onClick={(e) => SetShowMore(!showMore)}
            >
              {showMore ? "Show Less" : "Show More"}
            </Button>
          </Card>
        </ThemeProvider>
      </div>
    </div>
  );
}
export default ChosenPost;
