import { useSelector } from "react-redux";
import * as React from "react";
import AuthorPost from "./AuthorPost";
import Header from "../Header/Header";
import * as muiAuthor from "./styles/muiAuthor";

function Author() {
  const author = useSelector((state) => state.author);
  const users = useSelector((state) => state.users);
  const posts = useSelector((state) => state.posts);

  let filteredAuthorData = users.filter((user) => {
    return user.id === parseInt(author);
  });

  let renderAuthorPosts = posts.filter((user) => {
    return user.userId === parseInt(author);
  });
  let renderAuthorCard = renderAuthorPosts.map((item) => {
    return <AuthorPost name={item.name} body={item.body} key={item.id} />;
  });
  return (
    <div className="posts">
      <div className="postContainer">
        <Header />
        <muiAuthor.Card
          sx={{
            display: "flex",
            width: "40%",
            justifyContent: "space-between",
            margin: "auto",
            mt: 4,
          }}
        >
          <muiAuthor.Box sx={{ display: "flex", flexDirection: "column" }}>
            <muiAuthor.CardContent sx={{ flex: "1 0 auto" }}>
              <muiAuthor.Typography component="div" variant="h5">
                {filteredAuthorData[0].name}
              </muiAuthor.Typography>
              <muiAuthor.Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {filteredAuthorData[0].email}
              </muiAuthor.Typography>

              <muiAuthor.Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {filteredAuthorData[0].phone}
              </muiAuthor.Typography>

              <muiAuthor.Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {filteredAuthorData[0].company.bs}
              </muiAuthor.Typography>

              <muiAuthor.Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {filteredAuthorData[0].website}
              </muiAuthor.Typography>
            </muiAuthor.CardContent>
            <muiAuthor.Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></muiAuthor.Box>
          </muiAuthor.Box>
          <muiAuthor.CardMedia
            component="img"
            sx={{ width: "35%" }}
            image="https://images.pexels.com/photos/12442760/pexels-photo-12442760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Live from space album cover"
          />
        </muiAuthor.Card>
        <muiAuthor.Box className="post" sx={{ mt: 3 }}>
          {renderAuthorCard}
        </muiAuthor.Box>
      </div>
    </div>
  );
}
export default Author;
