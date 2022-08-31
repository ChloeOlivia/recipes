import './App.css';
import Recipe from './Recipes/Recipe';

function App() {
  return (
    <div className="App">
      <div className="cover-wrapper">
        <h1 className="cover">Chloe's Recipes</h1>
      </div>
      <Recipe name="Cinnamon Milk"/>
      <Recipe name=""/>
      <Recipe name=""/>
    </div>
  );
}

export default App;