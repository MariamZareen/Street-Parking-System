import Home from './pages/Home';
import Map from './pages/Map'
import{Routes,Route} from 'react-router-dom'
import Navbar from './pages/Navbar';
import Penalties from './pages/Penalties';
// import AddPenalty from './pages/AddPenalty';


function App() {
  return (
    <>
    <Navbar/>
    <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/map' element={<Map/>}/>
      <Route path='/penalties' element={<Penalties/>} />
    
    </Routes>
    </div>
    </>
  );
}

export default App;
