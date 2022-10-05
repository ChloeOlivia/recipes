import './App.css';
import Recipe from './Recipes/Recipe';
import data from './JSON/Recipes.json';

function App() {
  return (
    <div className="App">
      <div className="cover-wrapper">
        <h1 className="cover">Chloe's Recipes</h1>
      </div>
      {data.Recipes.map((recipe, index) => <Recipe key={index} name={recipe.name} ingredients={recipe.ingredients} description={recipe.description}/>)}
    </div>
  );
}

export default App;