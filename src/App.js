
import './App.css';
import { useEffect ,useState} from 'react';
import UserContext from './context/UserContext';
import Profile from './components/Profile';




//Jsx 
//Props->properties parent component-child components
//useeffect-allows you to perfrom sideeffect fetching data,updating the dom,or logging values
//dependency array
//Usecontext->that helps manage and share between multiple components without needing to pass props manualy to easer values
function App() {
const [user,setUser]=useState("Virat kohli")
  return (
<div className='App'>
<UserContext.Provider value={user}>
<h1>Cricket Team</h1>
<Profile/>

</UserContext.Provider>
</div>
  );
}

export default App;
