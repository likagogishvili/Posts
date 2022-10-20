import { useSelector } from "react-redux";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AuthorPost from "./AuthorPost";

function Author() {
  const author = useSelector((state) => state.author);
  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  let filteredAuthorData = users.filter((user) => {
    return user.id === parseInt(author);
  });

  let renderAuthorPosts = posts.filter((user) => {
    return user.userId === parseInt(author);
  });
  let renderAuthorCard = renderAuthorPosts.map((item) => {
    return <AuthorPost title={item.title} body={item.body} key={item.id} />;
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
                  {filteredAuthorData[0].name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {filteredAuthorData[0].email}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {filteredAuthorData[0].phone}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {filteredAuthorData[0].company.bs}
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {filteredAuthorData[0].website}
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: "35%" }}
              image="https://images.pexels.com/photos/12442760/pexels-photo-12442760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Live from space album cover"
            />
          </Card>
          <Box className="post" sx={{ mt: 3 }}>
            {renderAuthorCard}
          </Box>
        </ThemeProvider>
      </div>
    </div>
  );
}
export default Author;
