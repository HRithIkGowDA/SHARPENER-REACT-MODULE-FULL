import React ,{useState , useEffect}from "react";

const AuthContext= React.createContext({
    isLoggedIn : false,
    onLogout:()=>{},
    onLogIn:(email , password)=>{}
})

export const AuthContextProvider =(props)=>{

   const[isLoggedIn , setIsLoggedIn] =useState(false);

   useEffect(()=>{
    if(localStorage.getItem('isLoggedIn')==='1'){
      setIsLoggedIn(true);
    }
  })

   const logoutHandler=()=>{
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
   }

   const loginHandler = ()=>{
    localStorage.setItem('isLoggedIn' , '1')
    setIsLoggedIn(true)
   }

    return <AuthContext.Provider value={{isLoggedIn : isLoggedIn , onLogout : logoutHandler ,onLogin:loginHandler}}>
    {props.children}
    </AuthContext.Provider>
}

export default AuthContext