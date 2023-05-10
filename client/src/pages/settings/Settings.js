import React, { useState, useEffect,useMemo } from 'react'
import MaterialReactTable from 'material-react-table';
import http from '../../utils/http';
import EditIcon from '@mui/icons-material/Edit';
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Typography,
    Button,
    TextField,
    Chip,
  } from "@mui/material";
  import Box from '@mui/material/Box';
export const Example = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    tel: '',
    role: 'user',
  });
  const columns = useMemo(
    //column definitions...
    () => [
        { accessorKey: '_id', header: 'ID', 
     },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'email',
        header: 'Email',
      },
      {
        accessorKey: 'tel',
        header: 'Tel',
      },
      {
        accessorKey: 'role',
        header: 'Role',
      },
      {
        accessorKey: 'EDIT',
        header: 'EDIT',
        Cell: ({ row }) => <EditIcon onClick={(event) => {
            handleClick(event, row);
          }} >H</EditIcon>,

      },
    ],
    [],
    //end
  );


   useEffect(() => {
    fetch("http://localhost:5000/api/user/allusers")
      .then((data) => data.json())
      .then((data) => setUsers(data))

  }, [])

  console.log(users)

  const [open, setOpen] = React.useState(false);

  const handleShow = () => {
    setOpen(true);
  };

  const handleClose = () => {
    
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const refreshState = () => {
    fetch("http://localhost:5000/api/user/allusers")
      .then((data) => data.json())
      .then((data) => setUsers(data))
    
  }
  
    const handleSubmit = async (e) => {
        handleClose();
        e.preventDefault();
        try {
          await http.post('/user/newuser',userDetails);
        } catch (error) {
          console.log(error);
          if (error.response && error.response.status === 400) {
            setError(error.response.data);
          } 
        };
        setUserDetails([]);
        refreshState()
                
      };

      const handleClick = (event,cellValues) => {
        console.log(`Button clicked for row with id `,cellValues.id);
    };
    

  return (
    <div >
    <Button  variant="contained" color="primary" onClick={handleShow}>
        Create new user
      </Button>
      <Dialog open={open}>
      <DialogTitle>
        {"TITRE"}
        <Typography variant="h4">Lorem ipsum dolor sit amet consectetuer</Typography>
      </DialogTitle>
      <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
          align="center"
        style={{marginTop:'2%'}}
          
        >
          <div >
          <TextField
              label="Name"
              name="name"
              value={userDetails.name}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
             <TextField
             label="Email"
             name="email"
             value={userDetails.email}
             onChange={handleChange}
             margin="normal"
             variant="outlined"
            />
           </div>
           <div >
            <TextField
              label="Role"
              name="role"
              value={userDetails.role}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              />
             <TextField
            label="Password"
            name="password"
            value={userDetails.password}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            />
           </div>
        </Box>
      <DialogActions>
      <Button variant="contained" onClick={handleSubmit}>Save</Button>
      <Button variant="contained" color="error"onClick={handleClose}>
          Close
        </Button>
      </DialogActions>
      
      </Dialog>
    <MaterialReactTable
      columns={columns}
      data={users}
      enableColumnActions={false}
      enableColumnFilters={false}
      enablePagination={false}
      enableSorting={false}
      enableBottomToolbar={false}
      enableTopToolbar={false}
      muiTableBodyRowProps={{ hover: false }}
    />
    </div>
  );
};

export default Example;
