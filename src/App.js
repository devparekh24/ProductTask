import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom' 
import Login from './components/login/login';
import Signup from './components/signup/signup';
import Dashboard from './components/templete/dashboard/Dashboard';
import Orders from './components/templete/order/Order';
import Additem from './components/templete/additem/Additem';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='dashboard' element={<Dashboard/>}>
        <Route path='orders' element={<Orders/>}/>
        <Route path='additems' element={<Additem/>}/>
      </Route>
    </Routes>      
    </BrowserRouter>
  );
}

export default App;
