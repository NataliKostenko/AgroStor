import { useEffect, useState } from "react";
import FilterItem from "./filterItem.jsx";
import './filter.css';

export default function Filter(props) {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const loadData = async () => {
			if (!props.url) throw new Error('URL must be provided.');
			const items = await fetch(props.url)
				.then((items) => items.json());
			setItems(items);
		};
		loadData();
	}, []);
	return <div>
		{items.map((item, index) => <FilterItem url={props.url + index.toString()} text={item.text} key={index} />)}
	</div>
}