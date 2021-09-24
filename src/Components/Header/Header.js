import React from 'react'
import './Header.css'
import TextField from '@mui/material/TextField';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import categories from '../../data/category';
// rafce shortcode to create function
const Header = ({setCategory, category,word, setWord,lightMode}) => {
    const darkTheme = createTheme({
        palette: {
            primary:{
                main: lightMode? '#000': '#fff',
            },
          mode:lightMode? 'light' : 'dark',
        },
      });
      const handleChange = (Language) =>{
        setCategory(Language);
        setWord("");
      }
    return (
        <div className='header'>
            <span className='title'>{word ? word : "Word Hunt"}</span>
            <div className='inputs'>
            <ThemeProvider theme={darkTheme}>
                <TextField  
                className="search" 
                value={word}
                id="standard-basic" 
                label="Search a Word" 
                variant="standard"  
                onChange={(e) => setWord(e.target.value)}
                />
                <TextField
                    className="select"
                    id="outlined-select-currency"
                    select
                    label="Language"
                    value={category}
                    onChange={(e) => handleChange(e.target.value)}
                >
                    {categories.map((option) => (
                        <MenuItem key={option.label} value={option.label}>
                            {option.value}
                        </MenuItem>
                    ))}
                    
            
                </TextField>
            </ThemeProvider>
            
            </div>
        </div>
    )
}

export default Header
