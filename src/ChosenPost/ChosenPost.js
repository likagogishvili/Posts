import * as React from "react";
import { useSelector } from "react-redux";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

function ChosenPost() {
  const post = useSelector((state) => state.selectedPost);
  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);

  let filteredPost = posts.filter((item) => {
    return item.id === parseInt(post);
  });
  let postAuthor = users.filter((item) => {
    return item.id === filteredPost[0].userId;
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
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
          <Box className="post" sx={{ mt: 3 }}>
            {/* {renderAuthorCard} */}
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}
export default ChosenPost;
