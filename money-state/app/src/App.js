import React from 'react';
// import logo from './logo.svg';
import './css-reset.css';
import './App.css';
import LocalMoney from './components/local-money/LocalMoney';
import UpcomingBills from './components/upcoming-bills/UpcomingBills';

const App = () => {
  return (
    <div className="App">
		<div className="App__row">
			{/* <LocalMoney /> */}
			<UpcomingBills />
		</div>
		<div className="App__row">

		</div>
    </div>
  );
}

export default App;
