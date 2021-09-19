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
      <Employee></Employee>
    </div>
  );
}
function Employee(){
  // User Details API Call
  const [user, setUser] = useState([])
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=> res.json())
    .then(data=> setUser(data))
  }, [])
  // Todo API Call
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
    .then(res=> res.json())
    .then(data=> setTodos(data))
  },[])

  return(
    <div>
      <h2>EMPLOYEE DETAILS</h2>
      <div className='employeeGrid'>
        <div style ={{width:'65%'}} className='left-employee'>
          {
            user.map(user => <Details name={user.name} email={user.email} phone={user.phone} add={user.address.city}></Details>)
          } 
        </div>
        <div style={{width:'35%'}}>
          <h3 style={{backgroundColor: '#0d8880',color:'#fff', marginTop: '2rem', padding: '5px', borderRadius:'10px'} }>Todo</h3>
          {
            todos.map(todo => <Todos title={todo.title} id={todo.id}></Todos>)
          }
        </div>
      </div>
    </div>
  )
}

function Todos(props){
  console.log(props)
  const myStyle = {
    backgroundColor : '#000',
    color:'#fff',
    margin: '10px 0',
    borderRadius: '10px',
    padding:'10px 5px'
  }
  return(
    <div style={myStyle}>
      <h5>Work number: {props.id}</h5>
      <h5>Work Name : {props.title}</h5>
    </div>
  )
}

function Details(props){
  return(
    <div className='details-style' >
      <h4 style={{color:'white'}}>Name : {props.name.toUpperCase().slice(0,8)}</h4>
      <p>Email : {props.email}</p>
      <p>Mobile: {props.phone.slice(2,12)}</p>
      <p>City: {props.add}</p>
    </div>
  )
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
