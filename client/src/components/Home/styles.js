import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
  appBarSearch: {
    borderRadius: 4,
    marginBottom: '1rem',
    display: 'flex',
    padding: '16px',
  },
  pagination: {
    borderRadius: 4,
    margin: '1rem 0',
    padding: '16px',
    [theme.breakpoints.down('xs')]: {
      marginTop: '0.3rem',
    },
  },
  gridContainer: {
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
    },
  },
  chipInput: {
    margin: '10px 0',
  },
}));
