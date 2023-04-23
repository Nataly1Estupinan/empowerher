import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import './App.css';
import MyComponent from './menu';
import Component1 from './component1';
import LoginRegisterPage from './login'

import Educacion from './pages/Educacion';
import Transporte from './pages/Transporte';
import Inicio from './pages/Inicio';
import Layout from './pages/Layout';
import Acoso from './pages/Acoso';
import Derechos from './pages/derechos';
import Apoyo from './pages/apoyo';
import RedApoyo from './pages/RedApoyo';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/" element={<LoginRegisterPage />} />
          <Route path="transporte" element={<Transporte />} />
          
          <Route path="educacion" element={<Component1 />} />
          <Route path="acoso" element={<Acoso />} />
          <Route path="/derechos" element={<Derechos />} />
          <Route path="apoyo" element={<Apoyo />} />
          <Route path="red" element={<RedApoyo />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;

