import { useState, useEffect } from 'react';
import fetchData from '../data/stocks_data';

export default function Stocks() {
	const [ percentColor, setPercentColor ] = useState('rgb(35%, 77%, 23%)');
	const [ companyStockToDisplay, setCompanyStockToDisplay ] = useState([]);

	const getData = async () => {
		const res = await fetchData();
		setCompanyStockToDisplay(res);
	};

	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="stock-section-container">
			<div className="stock-container">
				{companyStockToDisplay.map((data, index) => {
					const { symbol, companyName, latestPrice, changePercent } = data;
					const changeColor = (color) => {
						Math.sign(changePercent) == -1 ? setPercentColor('red') : setPercentColor('rgb(35%, 77%, 23%)');
					};

					return (
						<div className="stock-content">
							<div className="stock-content-left">
								<div className="symbol-container">
									<h2>{symbol}</h2>
								</div>
								<div className="company-name-container">
									<h2>{companyName}</h2>
								</div>
							</div>
							<div className="stock-content-right">
								<div className="price-container">
									<h2>{latestPrice}</h2>
								</div>
								<div className="percent-change-container">
									<h2
										style={{ backgroundColor: percentColor }}
										onLoad={(percentColor) => changeColor(percentColor)}
									>
										{changePercent}%
									</h2>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
