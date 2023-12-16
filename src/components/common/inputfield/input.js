import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { CiSearch } from "react-icons/ci";
import OutlinedInput from '@mui/material/OutlinedInput';


  export const Inputbox = () => {


return (

    <FormControl variant="standard">
        <OutlinedInput
         sx={{ width: '40ch', height:40 }}
          className='inputbox'
          id="input-with-icon-adornment"
          placeholder='Search Clients, Properties'
          startAdornment={
            <InputAdornment position="start">
              <CiSearch style={{fontSize:20, color:'#0A3A67'}} /> {" "} {" "}
            </InputAdornment>
          }
        />
        </FormControl>

)

  }