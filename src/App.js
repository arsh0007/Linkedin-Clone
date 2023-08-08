import './App.css';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Login from './components/Login';
import HomeWithHeader from './components/HomeWithHeader';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/'element = {<Login/>} />
          <Route path="/home" element={<HomeWithHeader/>} />
        </Routes>        
      </Router>
    </div>
  );
}

export default App;
