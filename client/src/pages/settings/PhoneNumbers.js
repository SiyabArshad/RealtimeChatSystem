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
export const PhoneNumbers = () => {
  const [numbers, setNumbers] = useState([]);
  const [error, setError] = useState(null);
  const [numerDetails, NumberDetails] = useState({
    phonenumber: '',
    identifier: '',
    state: '',
  });
  const columns = useMemo(
    //column definitions...
    () => [
        { accessorKey: '_id', header: 'ID', 
     },
      {
        accessorKey: 'phonenumber',
        header: 'phonenumber',
      },
      {
        accessorKey: 'identifier',
        header: 'identifier',
      },
      {
        accessorKey: 'state',
        header: 'state',
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
    http.get(`/settings/allnumbers`).then((res) => {
        setNumbers(res.data);
      });
      

  }, [])

/*
   useEffect(() => {
    http.get("/settings/allnumbers")
      .then((data) => data.json())
      .then((data) => setNumbers(data))

  }, [])
*/
  console.log(numbers)

  const [open, setOpen] = React.useState(false);

  const handleShow = () => {
    setOpen(true);
  };

  const handleClose = () => {
    
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    NumberDetails((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(numerDetails)
  };

  const refreshState = () => {
    http.get(`/settings/allnumbers`).then((res) => {
        setNumbers(res.data);
      });
    
  }
  
    const handleSubmit = async (e) => {
        handleClose();
        e.preventDefault();
        try {
          await http.post('/settings/number',numerDetails);
        } catch (error) {
          console.log(error);
          if (error.response && error.response.status === 400) {
            setError(error.response.data);
          } 
        };
        NumberDetails([]);
        refreshState()
                
      };

      const handleClick = (event,cellValues) => {
        console.log(`Button clicked for row with id `,cellValues.original._id);
    };
    

  return (
    <div >
    <Button  variant="contained" color="primary" onClick={handleShow}>
        Create new PhoneNumbers
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
              label="phonenumber"
              name="phonenumber"
              value={numerDetails.phonenumber}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
            />
            
           </div>
           <div >
            <TextField
              label="identifier"
              name="identifier"
              value={numerDetails.identifier}
              onChange={handleChange}
              margin="normal"
              variant="outlined"
              />
             <TextField
            label="state"
            name="state"
            value={numerDetails.password}
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
      data={numbers}
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

export default PhoneNumbers;
