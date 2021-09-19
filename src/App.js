import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Workshop></Workshop>
      <Counter name='Even' number='0'></Counter>
      <Counter name='Odd' number='1'></Counter>
    </div>
  );
}

function Counter(props){
  const number =(parseInt(props.number))
  let [count, setCount] = useState(number)
  // Decrement 
  const decreaseCounter = () => {
    if(count <= 0 || count === 1){
      return
    }
    else{
      setCount(count -= 2)
    }
  }
  // Increment
  const increaseCounter = () => {
      setCount(count += 2)
  }
  return(
    <div className='count-style'>
      <h3 style={{marginBottom: '10px'}}>{props.name} Number : {count} </h3>
      <button className='btn-style' onClick={decreaseCounter}>Decrease</button>
      <button className='btn-style' onClick={increaseCounter }>Increase</button>
    </div>
  )
}

function Workshop(){
  return(
    <div>
      <div className='workshop-style'>
        <h3>Exclusive React Workshop for Beginners?</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi, explicabo.</p>
        <button className='btn-style' style={{margin:'0px'}}>Learn more</button>
      </div>
    </div>
  )
}

function Navbar(){
  return(
    <div style={{backgroundColor:'black', color:'#fff', display:'flex', justifyContent: 'space-between', padding: '1rem 2rem'}}>
      <h2 style={{margin : '0px'}}>HELLO REACT</h2>
      <button style={{backgroundColor: '#fff', color: '#000', border: 'none', padding: '5px 10px', borderRadius: '10px', cursor:'pointer', fontSize: '15px'}}>Sign Up</button>
    </div>
  )
}


export default App;
