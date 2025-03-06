
import './App.css';
import { BrowserRouter as Router,Routes,Route,} from 'react-router-dom';
import Home from './Home';
import About from './About';
import ListAndKeys from './ListAndKeys';




//Jsx 
//Props->properties parent component-child components
//useeffect-allows you to perfrom sideeffect fetching data,updating the dom,or logging values
//dependency array
//Usecontext->that helps manage and share between multiple components without needing to pass props manualy to easer values
function App() {

  return (
<div className='App'>
<Router>
  <Routes>
    <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/> 
     <Route path='/list' element={<ListAndKeys/>}/>

  </Routes>
</Router>
</div>
  );
}

export default App;
