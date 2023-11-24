import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
function App() {
  //js code
  const [Principle,setPrinciple] = useState(0);
const [Interest,setInterest] = useState(0);
const [Rate,setRate] = useState(0);
const [Year,setYear] = useState(0);
const [isPrincipal,setisPrinciple] = useState(true);
const[isRate,setisRate]  = useState(true);
const handleSubmit= (e)=>{
  e.preventDefault();
  console.log("==Principle Amount");
console.log(Principle);
console.log("==Rate of Interest");
console.log(Rate);
console.log("==Total Years");
console.log(Year);
let result = Principle*Year*Rate/100;
console.log(result);
setInterest(result);
}
function clearValues(){
  setPrinciple(0)
  setInterest(0)
  setRate(0)
  setYear(0)
}
const validate =(e)=>{
  const {value,name}  = e.target;
  console.log(name);
  if (!!value.match(/^[0-9]+$/)){
    if (name === 'Principle'){
     setPrinciple(value);
      setisPrinciple(true);
    }
  else if (name === 'Rate'){
    setRate(value);
    setisRate(true);
  }
}
else{
if (name ===   'Principle'){
setPrinciple(value);
setisPrinciple(false);
  }

  else if ( name === 'Rate'){
    setRate(value);
    setisRate(false);
  }
}
}
  return (
    <div className ='d-flex justify-content-center align-items-center w-100 mt-5'
    style={{height:'70vh',}}>
      <div style={{width:"500px"}} className='bg-light p-5 rounded text-center'>
      <h3>SIMPLE INTEREST</h3>
      <p>Calculate Your Simple Interest Easily</p>
      <div style={{height:'150px'}} className=' flex-column mt-5 bg-warning d-flex justify-content-center align-items-center'>
        <h1>{'\u20B9'}{Interest}</h1>
        <p>Total Simple Interest</p> 
      </div>
      <form action="" className='mt-5' onSubmit={(e)=>handleSubmit(e)}>
        <div className="mt-5">
        <TextField  id="outlined-basic" label="Priciple Amount" variant="outlined" className='w-100'value={Principle} 
        onChange={(e)=>validate(e)}/>
        </div>
        {! isPrincipal &&
        <div>
          <p className='text-danger mt-0'> Invalid Input</p>
        </div>}
        <div className="mt-3">
        <TextField name='Rate' id="outlined-basic" label="Rate Of Interest (pa)%" variant="outlined" className='w-100'value={Rate} 
        onChange={(e)=>validate(e)}/>
        </div>
        {! isRate &&
        <div>
          <p className='text-danger '> Invalid Input</p>
        </div>}
        <div className="mt-3">
        <TextField  id="outlined-basic" label="Year(Yr)" variant="outlined" className='w-100'value={Year} 
         onChange={(e=>setYear(e.target.value))}/>
        </div>
        <div className='mt-5 d-flex justify-content-center align-items-center'>
        <Stack  direction="row" spacing={2}>
        <Button variant="contained" className='bg-white text-success rounded' type='Submit'> Calculate</Button>
        <Button variant="contained" className='rounded bg-white text-danger' onClick={clearValues}> Reset</Button>
          </Stack>
        </div>
      </form>
      </div>
    </div>
  );
}

export default App;
