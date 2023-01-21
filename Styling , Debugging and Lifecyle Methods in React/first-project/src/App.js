import './App.css';
import React ,{useState}from 'react'
import UserList from './components/UI/UserList';
import Form from './components/Forms/Form';
import Wrapper from './components/Helpers/Wrapper';
const dummy_info =[
  {name : "Rahul" , age : 22 , college:"Fr CRCE"},
  {name : "Raja" , age : 18 , college:"BMC College"},
  {name : "Sarthak" , age : 12, college:"Gokuldham School"}

]
const App=()=> {
const[userList , setUserList] = useState(dummy_info)
  const addUserHandler=(newUser)=>{
    setUserList((prevUserList)=>{
      return [newUser , ...prevUserList]
    })
  }

  return (
    <Wrapper>
    <div className='container'>
      <Form onAddUser={addUserHandler} />
      <UserList items={userList} />
    </div>
    </Wrapper>
  );
}

export default App;
