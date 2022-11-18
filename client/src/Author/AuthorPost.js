import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function AuthorPost(props) {
  return (
    <Card key={props.id} sx={{ maxWidth: 345, mt: 2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          mineight="100"
          image="https://images.pexels.com/photos/4065404/pexels-photo-4065404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.body}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default AuthorPost;
