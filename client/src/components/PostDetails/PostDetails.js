import { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

// Redux
import { getPost, getPostsBySearch } from '../../actions/posts';
import { useDispatch, useSelector } from 'react-redux';

// Material-ui
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
  Grid,
} from '@material-ui/core';

import useStyles from './styles';

import imagePlaceHolder from '../../images/placeholder.png';
import moment from 'moment';

const PostDetails = () => {
  const { post, posts, isLoading } = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
  }, [id]);

  useEffect(() => {
    if (post) {
      dispatch(
        getPostsBySearch({ search: 'none', tags: post?.tags.join(',') })
      );
    }
  }, [post]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size='7em' />
      </Paper>
    );
  }

  const recommendedPosts = posts.filter(({ _id }) => _id !== post._id);

  const openPost = _id => history.push(`/posts/${_id}`);

  return (
    <>
      <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
        <div className={classes.card}>
          <div className={classes.section}>
            <Typography variant='h3' component='h2'>
              {post.title}
            </Typography>
            <Typography
              gutterBottom
              variant='h6'
              color='textSecondary'
              component='h2'
            >
              {post.tags.map(tag => `#${tag} `)}
            </Typography>
            <Typography gutterBottom variant='body1' component='p'>
              {post.message}
            </Typography>
            <Typography variant='h6'>Created by: {post.name}</Typography>
            <Typography variant='body1'>
              {moment(post.createdAt).fromNow()}
            </Typography>
            {/* <Divider className={classes.divider} />
            <Typography variant='body1'>
              <strong>Realtime Chat - coming soon!</strong>
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant='body1'>
              <strong>Comments - coming soon!</strong>
            </Typography> */}
            <Divider className={classes.divider} />
          </div>
          <div className={classes.imageSection}>
            <img
              className={classes.media}
              src={post.selectedFile || imagePlaceHolder}
              alt={post.title}
            />
          </div>
        </div>
        {recommendedPosts.length ? (
          <div className={classes.section}>
            <Typography gutterBottom variant='h5'>
              You might also like:
            </Typography>
            <Divider className={classes.divider} />

            <Grid container justify='space-around' alignContent='center'>
              {recommendedPosts.map(
                ({ title, message, name, likes, selectedFile, _id }) => (
                  <Grid
                    item
                    xs={10}
                    sm={5}
                    md={3}
                    key={_id}
                    className={classes.recommendedCard}
                    onClick={() => openPost(_id)}
                  >
                    <Typography gutterBottom variant='h6'>
                      {title}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2'>
                      {name}
                    </Typography>
                    <Typography gutterBottom variant='subtitle2'>
                      {message}
                    </Typography>
                    <Typography gutterBottom variant='subtitle1'>
                      Likes: {likes.length}
                    </Typography>
                    <img
                      src={selectedFile || imagePlaceHolder}
                      className={classes.recommendedImg}
                      alt='Recomendeds'
                    />
                  </Grid>
                )
              )}
            </Grid>
          </div>
        ) : (
          ''
        )}
      </Paper>
    </>
  );
};

export default PostDetails;
