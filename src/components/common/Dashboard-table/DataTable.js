
import './DataTable-style.css';
import * as React from 'react';
import { Typography, Avatar } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import data from '../../../services/index'



export default function Datatable({ handleClick }) {

  let rows = data

  const handleRowClick = () => {
    handleClick();
  };
  return (
    <div>
    <div
    className='tablebody'>
      <Table className='main-container'>
        <TableHead className='table-head'>
          <TableRow>
          <TableCell></TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Contact</TableCell>
            <TableCell align="right">Loan Type</TableCell>
            <TableCell align="right">Branch</TableCell>
            <TableCell align="right">PRM</TableCell>
            
          </TableRow>
        </TableHead>
        <br></br>
        <TableBody  className='table-head1'>
          {rows.map((row) => (
            <TableRow
            style={{cursor:'pointer'}}
              key={row.name}
              sx={{borderBottom: 6, borderColor:'#E5EFF9 !important'}}
              onClick={handleRowClick}
            >
              <TableCell style={{fontSize:5}} component="th" scope="row">
              <Avatar src={row.image} />
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.Email}</TableCell>
              <TableCell align="right">{row.Contact}</TableCell>
              <TableCell align="right">{row.Loan_type}</TableCell>
              <TableCell align="right">{row.Branch}</TableCell>
              <TableCell align="right">{row.PRM}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </div>
      <br></br>
      <div className='tablefooter'>
        <Typography className='paginationtext'>Showing 1- 50 of 1240</Typography>
      <Stack spacing={1} className='pagination'>
      <Pagination />
    </Stack>
      </div>
      </div>
  );
}

