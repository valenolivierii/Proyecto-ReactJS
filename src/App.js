import logo from "./logo.svg";
import "./App.css";
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <nav>
         <NavBar />
         <ItemListContainer greeting='Este es un mensaje de ItemListContainer' />
      </nav>
    </div>
  );
}

export default App;
