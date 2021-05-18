import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';

// Material-ui
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

import FileBase from 'react-file-base64';

const Form = ({ currentId, setCurrentId }) => {
  const history = useHistory();
  const [postData, setPostData] = useState({
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const [createPostError, setCreatePostError] = useState({
    title: false,
    message: false,
    tags: false,
  });
  const [helperTextError, setHelperTextError] = useState({
    title: '',
    message: '',
    tags: '',
  });
  const post = useSelector(state =>
    currentId ? state.posts.posts.find(p => p._id === currentId) : null
  );

  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();

  useEffect(() => {
    if (post) {
      setPostData(post);
    }
  }, [post]);

  const handleSubmit = e => {
    e.preventDefault();
    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.name })
      );
    } else {
      if (postData.message === '') {
        setCreatePostError({ ...createPostError, message: true });
        setHelperTextError({ ...helperTextError, message: 'Field required' });
      } else {
        dispatch(
          createPost({ ...postData, name: user?.result?.name }, history)
        );
      }
    }
    clear();
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant='h6' align='center'>
          Please Sign In to create your own memories and like other's memories.
        </Typography>
      </Paper>
    );
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form
        autoComplete='off'
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography varian='h6'>
          {currentId ? 'Editing' : 'Creating'} a Memory
        </Typography>
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          required
          error={createPostError.title}
          helperText={helperTextError.title}
          fullWidth
          value={postData.title}
          onChange={e => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          required
          error={createPostError.message}
          helperText={helperTextError.message}
          fullWidth
          value={postData.message}
          onChange={e => setPostData({ ...postData, message: e.target.value })}
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          required
          // error={postError.tags}
          fullWidth
          value={postData.tags}
          onChange={e =>
            setPostData({ ...postData, tags: e.target.value.split(',') })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant='contained'
          color='secondary'
          size='small'
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
