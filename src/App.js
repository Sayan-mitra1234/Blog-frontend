import logo from './logo.svg';
import './App.css';
import Sign from './components/signin';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Signup from './components/signup';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Sign/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Sign/> */}
    </div>
  );
}

export default App;
