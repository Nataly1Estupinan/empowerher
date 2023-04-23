import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import MyComponent from './menu';
import Component1 from './component1';
import LoginRegisterPage from './login'

import Educacion from './pages/Educacion';
import Transporte from './pages/Transporte';
import Inicio from './pages/Inicio';
import Layout from './pages/Layout';
function App() {
  return (
    <div>
      <h1>Routes</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="transporte" element={<Transporte />} />
          <Route path="/" element={<LoginRegisterPage />} />
          <Route path="educacion" element={<Component1 />} />
          
        </Route>
      </Routes>
    </div>

  );
}

export default App;

