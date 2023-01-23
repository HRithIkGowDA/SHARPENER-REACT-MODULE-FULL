
import { useSelector } from 'react-redux';
import { Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import { Navigate } from 'react-router-dom';

import ReadMail from './Components/ReadMail';
import Layout from './Components/Layout';

function App() {
  const authUser=useSelector(state=>state.auth.authenticated)

  return (
<Layout>
    <Routes>
    
    {!authUser && <Route path='/' element={<SignUpPage/>}></Route>}
    {authUser && <Route path='/' element={<Navigate to='/homepage'/>}></Route>}
      {authUser && <Route path='/homepage' element={<HomePage/>}></Route>}
      {!authUser && <Route path='/homepage' element={<Navigate to='/login'/>}></Route>}
      <Route path='/homepage/:mailid' element={<ReadMail/>}></Route>
       <Route path='/signup' element={<SignUpPage/>}></Route>
       <Route path='/login' element={<LoginPage/>}></Route>
      
    </Routes>
    </Layout>
  );
}

export default App;
