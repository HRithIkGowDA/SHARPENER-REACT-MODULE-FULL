import React, { useState , useRef } from "react";

const Form = (props) => {
   // const[name,setName] = useState('');
   // const[age,setAge] = useState('');
   const nameInputRef =useRef();
   const ageInputRef =useRef();
   const collegeInputRef =useRef();



    const submitHandler =(event)=>{
       event.preventDefault();
       const newUser = {
        name : nameInputRef.current.value,
        age : ageInputRef.current.value,
        college : collegeInputRef.current.value
       }
       console.log(newUser);
       props.onAddUser(newUser);
       nameInputRef.current.value=""
       collegeInputRef.current.value=""
       ageInputRef.current.value=""
      //  setName('');
      //  setAge('');
    }

    // const nameChangeHandler=(event)=>{
    //  setName(event.target.value)
    // }
    // const ageChangeHandler=(event)=>{
    //   setAge(event.target.value)
    // }
  return (
    <form onSubmit={submitHandler} className="mb-3" >
        <h2 className="w-60 text-center mt-3">Add User</h2>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          // value={name}
          // onChange={nameChangeHandler}
          ref={nameInputRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          // value={age}
          // onChange={ageChangeHandler}
          ref={ageInputRef}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="college" className="form-label">
          College Name
        </label>
        <input
          type="text"
          className="form-control"
          id="college"
          // value={age}
          // onChange={ageChangeHandler}
          ref={collegeInputRef}
        />
      </div>
      <button type="submit" className="btn btn-primary w-100 ">
        Add User
      </button>
    </form>
  );
};

export default Form;
