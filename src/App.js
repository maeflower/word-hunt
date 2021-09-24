import React,{useEffect, useState} from 'react';
import axios from 'axios'
import Container from '@mui/material/Container';
import Header from './Components/Header/Header';
import './App.css';
import Definitions from './Components/Definitions/Definitions';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
// import trees from './Images/trees.jpg'

function App() {
  const [meanings, setMeanings] = useState([])
  const [word, setWord] = useState('')
  const [category, setCategory] = useState('en')
  const [lightMode, setLightMode] = useState(false)

  const DarkModeSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
      '& .MuiSwitch-thumb': {
        width: 15,
      },
      '& .MuiSwitch-switchBase.Mui-checked': {
        transform: 'translateX(9px)',
      },
    },
    '& .MuiSwitch-switchBase': {
      padding: 2,
      '&.Mui-checked': {
        transform: 'translateX(12px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
        },
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
      width: 12,
      height: 12,
      borderRadius: 6,
      transition: theme.transitions.create(['width'], {
        duration: 200,
      }),
    },
    '& .MuiSwitch-track': {
      borderRadius: 16 / 2,
      opacity: 1,
      backgroundColor:
        theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
      boxSizing: 'border-box',
    },
  }));

  const dictionaryApi = async()=>{
    try{
      // fetching the api
      // use the ` to change the api`
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`)
      // checking to see what is being pulled in
      
      setMeanings(data.data)
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(meanings)

  // useEffect is called whenever your component is first time rendered
  useEffect(() => {
    // calling the above function
    dictionaryApi();
    // if you put anything inside of the [] these are call dependency
  }, [word, category])

  return (
    <div className='App' 
    style={{height:'100vh', 
    backgroundColor: lightMode? '#fff' :'#282c34', 
    color: lightMode? 'black' : 'white',
    transition:'all 0.5 linear',
    // backgroundImage: `url(${trees})`
    }}>
      <Container maxWidth='md' style={{display:'flex', flexDirection:'column', height:'100vh', justifyContent:'space-evenly'}}>
          <div style={{position:'absolute', top:0, right: 15, paddingTop:10, display:'flex', flexDirection:'row'}}>
            <span style={{paddingRight:'20px'}}>{lightMode ? 'Dark' : 'Light'} Mode</span>
            <DarkModeSwitch 
            checked={lightMode} 
            onChange={()=> setLightMode(!lightMode)}/>
          </div>
          <Header 
          category={category} 
          setCategory={setCategory} 
          word={word} 
          setWord={setWord}
          lightMode={lightMode}/>
          {/* this means if there is something inside the mean only then will the definition render*/}
        {meanings && (
        <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
