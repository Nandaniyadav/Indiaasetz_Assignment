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
  createData('Frozen yoghurt', Cameron, abcgmail.com, 8888888888, LAP, Bangalore,Nalini),
  createData('Ice cream sandwich', Cameron, abcgmail.com, 8888888888, Home_Loan,Bangalore,Nalini),
  createData('Eclair', Cameron, abcgmail.com, 8888888888, LAP, Bangalore,Nalini),
  createData('Cupcake', Cameron, abcgmail.com, 8888888888, LAP, Bangalore,Nalini),
  createData('Gingerbread', Cameron, abcgmail.com, 8888888888, LAP, Bangalore,Nalini),
  createData('main', Cameron, abcgmail.com, 8888888888, Home_Loan, Bangalore,Nalini),
  createData('last', Cameron, abcgmail.com, 8888888888, LAP, Bangalore,Nalini),
  createData('main', Cameron, abcgmail.com, 8888888888, Home_Loan, Bangalore,Nalini),
  createData('last', Cameron, abcgmail.com, 8888888888, LAP, Bangalore,Nalini),
  createData('main', Cameron, abcgmail.com, 8888888888, LAP, Bangalore,Nalini),
  createData('last', Cameron, abcgmail.com, 8888888888, Home_Loan, Bangalore,Nalini),
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
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.contact}</TableCell>
              <TableCell align="right">{row.tonetype}</TableCell>
              <TableCell align="right">{row.branch}</TableCell>
              <TableCell align="right">{row.prm}</TableCell>
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

