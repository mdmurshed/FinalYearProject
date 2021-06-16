import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));



function PopUp() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
      <div>
        <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
          Open Popover
        </Button>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography className={classes.typography}>
          <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow style={{backgroundColor:"#DED6D6"}}>
                        <TableCell><b>Items</b></TableCell>
                        <TableCell align="left"><b>Category</b></TableCell>
                        <TableCell align="left"><b>Discription</b></TableCell>
                        <TableCell align="left"><b>Price</b></TableCell>
                        <TableCell align="left"><b>Edit</b></TableCell>
                        <TableCell align="left"><b>Delete</b></TableCell>
                    </TableRow>
                </TableHead>
                {/* <TableBody>
                    {
                        items.map((row) => (
                            <TableRow key={row._id}>
                                <TableCell component="th" scope="row">
                                    {row.item}
                                </TableCell>
                                <TableCell align="Left">{row.category}</TableCell>
                                <TableCell align="Left">{row.discription}</TableCell>
                                <TableCell align="Left">{row.price}</TableCell>
                                <TableCell align="Left"><button ><EditIcon></EditIcon></button></TableCell>
                                <TableCell align="Left"><button onClick={()=>deleteItem(row._id)}><DeleteIcon></DeleteIcon></button></TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody> */}
            </Table>
        </TableContainer>
          </Typography>
        </Popover>
      </div>
    );
  }

  export default PopUp