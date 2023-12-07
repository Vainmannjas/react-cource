import CostItem from './components/costItem/CostItem'

import {purchasesDB} from './helpers/purchasesDB'

import './Styles/main.scss'

function App() {
  	return (
		<>
			<CostItem 
				date={purchasesDB[0].date}
				name={purchasesDB[0].name} 
				price={purchasesDB[0].price}
			/>
			<CostItem 
				date={purchasesDB[1].date}
				name={purchasesDB[1].name} 
				price={purchasesDB[1].price}
			/>
			<CostItem 
				date={purchasesDB[2].date}
				name={purchasesDB[2].name} 
				price={purchasesDB[2].price}
			/>
		</>
  	);
}

export default App;
