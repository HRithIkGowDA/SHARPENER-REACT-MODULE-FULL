import { Fragment } from "react";
import AvailableItems from "../Items/AvailableItems";
import classes from './Body.module.css'


const Body=(props)=>{
    return<div className={classes.body}>
      
        <AvailableItems/>
      
        </div>
        
    
}
export default Body;