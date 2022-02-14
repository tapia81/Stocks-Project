import axios from 'axios';

const API_KEY = `Your Api Key`;
const BASE_URL = `https://sandbox.iexapis.com/stable/stock/market/collection/list?collectionName=mostactive&token=${API_KEY}`;

const fetchData = async () => {
	let response = await axios.get(BASE_URL);
	console.log(response.data);
	return response.data;
};
export default fetchData;
