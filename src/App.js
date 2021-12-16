import logo from './logo.svg';
import Home from './Home';
import Teste from './Teste';
import Header from './Components/Header';
import bootstrap from './bootstrap.min.css';
import Click from './Components/Click';
import MyRoutes from './Components/MyRoutes';
import './App.css';


function App() {

	return (
     <div className="App">
       <Header />
       <MyRoutes />
       <Click />
    </div>
  );
}

export default App;
