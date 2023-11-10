
import './App.css';

import Navigation from './component/navbar/Navigation';
import Login from './component/login/Login';
import AddContact from './component/ajoutContact/AddContact';
import Home from './component/home/Home';
import ContactList from './component/contact/ContactList';
import UpdatContact from './component/updateContact/UpdatContact';
import { Routes ,Route} from 'react-router-dom'


function App() {
  return (
   <div>
   
    <Navigation/>

      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/login' element={<Login/>}  />
        <Route path='/add' element={  <AddContact/>} />
        <Route path='/contact' element={<ContactList/>} />
        <Route path='/update/:id'  element={<UpdatContact/>}/>
      </Routes>
      
      </div>
      
   
  );
}

export default App;
