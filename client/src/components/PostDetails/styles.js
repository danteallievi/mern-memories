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
    borderRadius: '15px',
    boxShadow:
      '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
  },
  recommendedImg: {
    width: '65%',
    [theme.breakpoints.down('sm')]: {
      width: '70%',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
}));
