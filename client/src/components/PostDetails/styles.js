import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
  },
  card: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
      flexDirection: 'column',
    },
  },
  section: {
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  imageSection: {
    marginLeft: '20px',
    width: '65%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    },
  },
  recommendedPosts: {
    display: 'flex',
    // flexDirection: 'row',
    // flexFlow: 'row wrap',
    overflowWrap: 'anywhere',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    height: '39vh',
  },
  divider: {
    margin: '1rem 0',
  },
  recommendedCard: {
    overflowWrap: 'anywhere',
    cursor: 'pointer',
    textAlign: 'center',
    margin: '1rem 1rem',
    boxShadow: '0px 5px 10px 0px rgba(0,0,0,0.2)',
  },
  recommendedImg: {
    width: '60%',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));
