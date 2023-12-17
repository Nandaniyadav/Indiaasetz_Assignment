import { Typography, Avatar } from '@mui/material';
import './DataTable-style.css';
import * as React from 'react';

import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


function createData(name, calories, fat, carbs, protein, main, last) {
  return { name, calories, fat, carbs, protein, main, last };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 4325,2355),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3,4325,2355),
  createData('Eclair', 262, 16.0, 24, 6.0, 4325,2355),
  createData('Cupcake', 305, 3.7, 67, 4.3, 4325,2355),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 4325,2355),
  createData('main', 305, 3.7, 67, 4.3, 4325,2355),
  createData('last', 356, 16.0, 49, 3.9, 4325,2355),
  createData('main', 305, 3.7, 67, 4.3, 4325,2355),
  createData('last', 356, 16.0, 49, 3.9, 4325,2355),
  createData('main', 305, 3.7, 67, 4.3, 4325,2355),
  createData('last', 356, 16.0, 49, 3.9, 4325,2355),
];

export default function Datatable() {
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
            
              key={row.name}
              sx={{borderBottom: 6, borderColor:'#E5EFF9 !important'}}
            >
              <TableCell style={{fontSize:5}} component="th" scope="row">
              <Avatar />
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.main}</TableCell>
              <TableCell align="right">{row.last}</TableCell>
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

