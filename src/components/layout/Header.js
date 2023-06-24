import  {Fragment} from 'react'
import classes from './Header.module.css'
import HeaderButton from './HeaderButton';
const Header =props=>{
	return(
		<Fragment>
		<header className={classes.header}>
		<h1>React Meals</h1>
		<HeaderButton  onTouch ={props.onClick}/>
		</header>
		<div>
		</div>
		</Fragment>

		)

}
export default Header;