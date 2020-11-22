import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff"
  },
  hero: {
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80')",
    height: "500px",
    backgroundPosition: "center",
    backgroundRepeat: "no repeat",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  },
  blogContainer: {
    paddingTop: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxwidth: "100%"
  },
  media: {
    height: 240
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between"
  },
  author: {
    display: "flex"
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center"
  }
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
          <Typography variant="h4" className={classes.blogTitle}>
            Articles
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1558220830-be43f58c016d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        React useContext
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                     <Box className={classes.author}>
                        <Avatar src="https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8&auto=format&fit=crop&w=500&q=60" />
                        <Box ml={2}>
                          <Typography variant="subtitle2" component="p">
                            Sarah Daniels
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            March 15, 2020 
                          </Typography>
                        </Box>
                     </Box>
                     <Box>
                        {/* <BookmarkBorderIcon /> */}
                     </Box>
                  </CardActions>
                </Card>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1521032078283-ca2eb1773c0e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        React useContext
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                     <Box className={classes.author}>
                        <Avatar src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <Box ml={2}>
                          <Typography variant="subtitle2" component="p">
                            Ian Howard
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            March 15, 2020 
                          </Typography>
                        </Box>
                     </Box>
                     <Box>
                        {/* <BookmarkBorderIcon /> */}
                     </Box>
                  </CardActions>
                </Card>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1600714577133-78dcaf9a2eb4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDV8fHJhbmRvbSUyMHBob3RvfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        React useContext
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                     <Box className={classes.author}>
                        <Avatar src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGVyc29ufGVufDB8fDB8&auto=format&fit=crop&w=500&q=60" />
                        <Box ml={2}>
                          <Typography variant="subtitle2" component="p">
                            Steven Bender
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            March 15, 2020 
                          </Typography>
                        </Box>
                     </Box>
                     <Box>
                        {/* <BookmarkBorderIcon /> */}
                     </Box>
                  </CardActions>
                </Card>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
            <Card>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image="https://images.unsplash.com/photo-1521032078283-ca2eb1773c0e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGhvdG98ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                      title="Contemplative Reptile"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        React useContext
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions className={classes.cardActions}>
                     <Box className={classes.author}>
                        <Avatar src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60" />
                        <Box ml={2}>
                          <Typography variant="subtitle2" component="p">
                            Ian Howard
                          </Typography>
                          <Typography variant="subtitle2" color="textSecondary" component="p">
                            March 15, 2020 
                          </Typography>
                        </Box>
                     </Box>
                     <Box>
                        {/* <BookmarkBorderIcon /> */}
                     </Box>
                  </CardActions>
                </Card>
              </Card>
            </Grid>
          </Grid>
          <Box my={4} className={classes.paginationContainer}>
              <Pagination count={10} />
          </Box>
      </Container>
    </div>
  );
}

export default App;
