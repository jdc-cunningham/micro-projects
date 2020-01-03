import React from 'react';
// import logo from './logo.svg';
import './css-reset.css';
import './App.css';
import LocalMoney from './components/local-money/LocalMoney';

const App = () => {
  return (
    <div className="App">
		<div className="App__row">
			<LocalMoney />
		</div>
		<div className="App__row">

		</div>
    </div>
  );
}

export default App;
