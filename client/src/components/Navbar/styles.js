import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles(theme => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',

    [theme.breakpoints.down('sm')]: {
      padding: '10px 0px',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  brandContainer: {
    width: '30%',
    whiteSpace: 'nowrap',
    textAlign: 'center',

    [theme.breakpoints.down('sm')]: {
      transform: 'scale(0.7)',
    },
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      transform: 'scale(0.7)',
    },
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  },
  image: {
    display: 'inline',
    marginLeft: '15px',
    [theme.breakpoints.down('xs')]: {
      marginLeft: '0px',
    },
  },
  toolbar: {
    width: '30%',
    whiteSpace: 'nowrap',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      // justifyContent: 'space-between',
    },
  },
  userName: {
    // display: "flex",
    // alignItems: "center",
  },

  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
}));
