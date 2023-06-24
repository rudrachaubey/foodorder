import cartContext from './cartContext'
const cartProvider =(props)=>{

const addItemHandler=(item)=>{

}
const removeItemHandler=(id)=>{

}


	const cartContext = {
		items:[],
 	totalAmount:0,
 	addItem:addItemHandler,
 	removeItem:removeItemHandler
	}

	return(
		<cartContext.Provider value={cartContext}>
		{props.children}
		</cartContext.Provider>
		)

}
export default cartProvider;