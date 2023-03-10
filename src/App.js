import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FORM from ".//pages/form"
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<FORM />} />
    </Routes>
  );
}

export default App;
