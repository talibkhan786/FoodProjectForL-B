
import { useState } from 'react';
import './App.css';
import Homepage from './screen/homepage/homepage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/login/signin'
import SignUp from './components/register/signup';


function App() {

  const [user, setLoginUser] = useState({

  })

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={
            user && user._id ? < Homepage setLoginUser={setLoginUser} /> : <SignIn setLoginUser={setLoginUser} />
            } />
          <Route path='/signin' element={<SignIn setLoginUser={setLoginUser} />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
