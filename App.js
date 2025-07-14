import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signin from './pages/signin';
import Create from './pages/create'
import Mail from './pages/mail';
import Password from './pages/password';
import Password2 from './pages/password2';
import Thankyou from './pages/thankyou';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/" element = {<Signin/>}/>
         <Route path = "/create" element = {<Create/>}/>
        <Route path = "/mail" element = {<Mail/>}/>
        <Route path = "/password" element = {<Password/>}/>
        <Route path = "/password2" element = {<Password2/>}/>
        <Route path = "/thankyou" element = {<Thankyou/>}/> 
      </Routes>
    </Router>
  );
}


export default App;