import React, { useEffect, useState } from 'react';

import { Switch, Route, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Home from './Home';
import createProject from './Create_project';
import project from './Project';
import Projects from './Projects';
import Links from './Components/Links/Links';
import AddLink from './AddLink';

import Grid, {GridSpacing} from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {

  const projects = useSelector((state: any) => state.projects.projects);
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  //const userBusinessPlans = useSelector((state: any) => state.user.businessPlans)

  return (
    <div className={classes.root}>
    <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Project Links
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
    </AppBar>
    <Grid container spacing={2}>
      <Grid item xs={2} lg={2}>
        <br/>
        <Button component={Link} to={'/user/links'}>Links</Button>
        <br/>
        <Button component={Link} to={'/user/links/new'}>New Link</Button>
        <br/>
        <br/>
        <Button component={Link} to={'/user/projects'}>Projects</Button>
        <br/>
        <Button component={Link} to={'/user/projects/new'}>New Project</Button>
        <br/>
        <br/>
        <List>
          {projects.map((project: any) => {
              return(
                      <>
                        <ListItem>
                            <Link to={'/user/projects/' + project.projectId}>{project.projectName}link</Link> count
                        </ListItem>
                      </>
              )
          })}
        </List>
        <br/>
      </Grid>
      <Grid item xs={10} lg={10}>
        <div>
          
          <Switch>
           <Route exact path="/" component={Home}/>
           <Route exact path="/user/projects" component={Projects}/>
           <Route exact path="/user/projects/new" component={createProject}/>
           <Route exact path="/user/projects/:projectId" component={project}/>
           <Route exact path="/user/links" component={Links}/>
           <Route exact path="/user/links/new" component={AddLink}/>
          </Switch>
        </div>
      </Grid>
    </Grid>
    </div>
  );
}

export default App;

