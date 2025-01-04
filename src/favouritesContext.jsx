import { useContext } from 'react';
import { createContext, useState } from 'react';

const favouritContext = createContext();
const favouritId = '22aaf1cb-9e0e-44c3-a4e9-490a336b7796';

const FavouritContextProvider = (props) => {

	const getFavouritState = () => {
		const favouritState = localStorage.getItem(favouritId);
		if (favouritState) {
			return JSON.parse(favouritState);
		}
		return [];
	};

	const [favouritItems, setFavouritItems] = useState(getFavouritState());
	/* const [showItems, setShowItems] = useState(false);
	const [showAlert, setShowAlert] = useState(null); */

	const toggle = (product, quantity = 1) => {
		// нужно проверить, нет ли уже такого товара в избранном
		const itemIndex = favouritItems.findIndex(value => value.id === product.id);
		if (itemIndex < 0) { // такого товара еще нет
			const newItem = {
				...product,
				quantity: quantity
			};
			setFavouritItemsInternal([...favouritItems, newItem]);
		} else {
			remove(product.id)
		}
	};

	const contains = (productId) => {
		const itemIndex = favouritItems.findIndex(value => value.id === productId);
		return itemIndex >= 0;
	};

	const remove = (id) => {
		const newFavourit = favouritItems.filter(product => product.id !== id);
		setFavouritItemsInternal(newFavourit);
	}

	/* const toggleShow = () => setShowItems(!showItems);

	const hideAlert = () => setShowAlert(null);
 */
	const getFavouritQuantity = (productId) => {
		const itemIndex = favouritItems.findIndex(value => value.id === productId);
		if (itemIndex < 0) {
			return 0
		}
		else {
			return favouritItems[itemIndex].quantity
		}
	}
	const getTotalQuantity = () => favouritItems.reduce((quantity, currentValue) => quantity + currentValue.quantity, 0);

	// const getTotalAmount = () => cartItems.reduce((sum, item) => sum + item.cost * item.quantity, 0);

	const clear = () => setFavouritItemsInternal([]);

	const setFavouritItemsInternal = (favouritItems) => {
		localStorage.setItem(favouritId, JSON.stringify(favouritItems));
		setFavouritItems(favouritItems);
	}

	// контекст, который будет доступен всем потомкам
	const value = {
		items: favouritItems,
		toggle: toggle,
		remove: remove,
		contains: contains,
		// showItems: showItems,
		// toggleShow: toggleShow,
		// showAlert: showAlert,
		// hideAlert: hideAlert,
		getFavouritQuantity: getFavouritQuantity,
		// getTotalAmount: getTotalAmount,
		clear: clear,
		getTotalQuantity: getTotalQuantity
	};

	return (
		<favouritContext.Provider value={value}>
			{props.children}
		</favouritContext.Provider>
	);
}

const useFavouritContext = () => useContext(favouritContext);

export { useFavouritContext, FavouritContextProvider };


