import './App.css';
import {BrowserRouter , Routes, Route} from "react-router-dom"
import Home from './Home';
import PaymentSucess from './PaymentSucess.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/paymentsucess' element={<PaymentSucess/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
