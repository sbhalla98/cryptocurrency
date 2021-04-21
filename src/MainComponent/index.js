
import './App.css';

import React from 'react';

import { Typography,TextField }  from '@material-ui/core';
import {
  makeStyles,
  createStyles,
  // withStyles,
  // Theme
} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(() =>
  createStyles({
    input: {
      '& .MuiOutlinedInput-input':{
        padding: '6px !important',
        height: '1.5em',
        margin:'2px'
      },
      marginLeft:'4em',
      borderRadius: '6px',
      backgroundColor :'white',
      width :'8em'
    },
    header: {
      padding:'0.2em 0.3em',
      backgroundColor : 'rgb(40,41,59)',
      textTransform: 'uppercase',
      color: 'white',
      height: "30px",
      width:"100%",
      zIndex:"10",
      // boxShadow : "0 4px 8px 0 rgba(10,10 ,10, 0.2), 0 6px 20px 0 rgba(10,10,10, 0.19)",
       fontSize: '100px',
       position: "fixed",
       top:"0%",
       left: "0%",
       display:'flex',
       alignItems:'center',
       fontFamily :'Gill Sans Extrabold, sans-serif'
    }
  })
);


export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
        <Typography variant="h6">CRYPTOCURRENCY</Typography>
        <TextField id="outlined-basic" variant="outlined" placeholder="Search" className={classes.input}
          InputProps={{
            endAdornment : (
            <SearchIcon />
            )
          }}/>
    </div>
  );
}
