import * as muiAuthor from "./styles/muiAuthor";
function AuthorPost(props) {
  return (
    <muiAuthor.Card key={props.id} sx={{ maxWidth: 345, mt: 2 }}>
      <muiAuthor.CardActionArea>
        <muiAuthor.CardMedia
          component="img"
          mineight="100"
          image="https://images.pexels.com/photos/4065404/pexels-photo-4065404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="green iguana"
        />
        <muiAuthor.CardContent>
          <muiAuthor.Typography gutterBottom variant="h5" component="div">
            {props.title}
          </muiAuthor.Typography>
          <muiAuthor.Typography variant="body2" color="text.secondary">
            {props.body}
          </muiAuthor.Typography>
        </muiAuthor.CardContent>
      </muiAuthor.CardActionArea>
    </muiAuthor.Card>
  );
}

export default AuthorPost;
