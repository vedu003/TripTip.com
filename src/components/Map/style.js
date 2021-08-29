import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100px',
  },
  mapContainer: {
    height: '85vh', width: '100%',  marginLeft: '12px', marginTop: '25px',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
  author: {
    textAlign: 'end',
    marginTop:'10px',
   [theme.breakpoints.down('xs')]: {
    textAlign: 'center',
    marginTop:'10px',
  },
}
}));