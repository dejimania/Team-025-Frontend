import React from 'react';
import './App.css';
import Routes from './routes';
import { DefaultLayout } from './layouts';

function App() {
  return (
    <div className="App">
			<DefaultLayout>
				<Routes/>
			</DefaultLayout>
    </div>
  );
}

export default App;
