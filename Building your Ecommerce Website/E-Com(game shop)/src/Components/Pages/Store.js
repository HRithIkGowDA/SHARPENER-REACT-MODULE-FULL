import AvailableItems from "../Layout/Items/AvailableItems";
import classes from './Store.module.css';

const Store=(props)=>{
    return<div className={classes.body}>
        <h1 className={classes.music}>GAMES</h1>
        <AvailableItems/>
      
        </div>
        
    
}
export default Store;