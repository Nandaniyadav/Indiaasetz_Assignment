import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './header-style.css'
import { FaPlusCircle } from "react-icons/fa";

export const Headerbutton = () => {
  return (
    <Stack direction="row" spacing={2}>
    <Button
    className='button-style'
     variant="outlined" startIcon={<FaPlusCircle style={{fontSize:25, color:'#fff'}}  />}>
       Add
    </Button>
  </Stack>
  )
}
