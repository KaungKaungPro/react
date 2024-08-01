import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './UserAccount/Login';
import TradeDashboard from './VirtualTradingEnv/TradeDashboard';
import LearningCentre from './LearningCentre/LearningCentre'
import ViewStockTrade from './VirtualTradingEnv/viewStockTrade';
import MktSimParamForm from './VirtualTradingEnv/Admin/MktSimParamForm';

function App() {
  return (<BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="learningCentre" element={<LearningCentre />} />
        <Route path="virtualTradingEnv" element={<TradeDashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="viewStockTrade/:stockCode" element={<ViewStockTrade />} />
        <Route path="virtualTradingAdmin" element={<MktSimParamForm />} />
      </Routes>
    </BrowserRouter>);
}

export default App;
