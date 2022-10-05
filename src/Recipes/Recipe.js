import './Recipe.css';

function Recipe(props) {
  return (
    <div className="Recipe">
        <h2>
          {props.name}
        </h2>
        <ul>
          {props.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>)}
        </ul>
        <p>
          {props.description}
        </p>
    </div>
  );
}

export default Recipe;