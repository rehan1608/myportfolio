import "./App.css";
import React from 'react';
import PortfolioContainer from "./PortfolioContainer/PortfoliContainer";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <PortfolioContainer/>
    </div>
  ); 
}

export default App;