/* eslint-disable */ 
import { Divider, Avatar, Grid } from "@material-ui/core";
function Comments(props){
    const imgLink =
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";
    return(
        <div>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{props.name}</h4>
            <h6 style={{ margin: 0, textAlign: "left" }}>{props.email}</h6>

            <p style={{ textAlign: "left" }}>
             {props.body}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              posted 1 minute ago
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
        </div>
    )
}

export default Comments