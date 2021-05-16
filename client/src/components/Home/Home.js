import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import Pagination from '../Pagination';

import { Container, Grow, Grid, Paper } from '@material-ui/core';
import useStyles from './styles';

const Home = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify='space-between'
          alignItems='stretch'
          spacing={3}
          className={classes.mainContainer}
        >
          <Grid item xs={12} md={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
            <Paper elevation={6}>
              <Pagination />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
