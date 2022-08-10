import React, {useState} from 'react';
import './style.css';
import Menu from './menuapi.js';
import MenuCard from './menucard.js';
import Navbar from './navbar.js';

const uniqueList = 
[ ... new Set(Menu.map((curElem) => {
	return curElem.category;
})),"All",
];

const Resturant = () => {
	const [menudata, setMenuData] = useState(Menu);
	const [menuList, setMenuList] = useState(uniqueList);

	const filterItem = (category) => {

		if (category === "All") {
			setMenuData(Menu);
			return;
		}

       const updatedList = Menu.filter((curElem) => {
       	return curElem.category === category;
       });

       setMenuData(updatedList);
	};
	
	return (
		<>
		<Navbar filterItem={filterItem} menuList={menuList}/>
		<MenuCard menuData={menudata}/>
		</>
		);
}; 

export default Resturant;