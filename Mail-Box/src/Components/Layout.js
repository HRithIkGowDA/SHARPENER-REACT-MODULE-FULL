import { NavLink } from "react-router-dom"
import classes from './Layout.module.css'
import { useSelector } from "react-redux"
import { showInboxActions } from "../store/mailSlice"
import { useDispatch } from "react-redux"
const Layout=(props)=>{
 const dispatch=useDispatch()
    const authUser=useSelector(state=>state.auth.authenticated)

    const logoutHandler=()=>{
        localStorage.removeItem('currUser')
    }

    return (
<>
        <header className={classes.header}>
            <div className={classes.logo}>WELCOME TO MY MAIL PROJECT</div>
            <nav className={classes.nav}>
                {authUser &&
                <ul>
                <li><NavLink to='/homepage' onClick={()=>{dispatch(showInboxActions.setInboxShow(true))}}>HOME</NavLink></li>
                <li><NavLink to='/login'  onClick={logoutHandler}>LOG OUT</NavLink></li>
                    
                </ul>}
            </nav>
        </header>
        <main className={classes.main}>{props.children}</main>
        </>
    )

}

export default Layout