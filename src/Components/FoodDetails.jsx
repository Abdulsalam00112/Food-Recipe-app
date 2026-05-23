import styles from "./foodetails.module.css";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
export default function FoodDetails({ foodID }) {
  const [food, setFood] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "7f8bf0b4c25542d99459a95c4a09f822";
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }

    fetchFood();
  }, [foodID]);

  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipe}>{food.title}</h1>
        <img className={styles.image} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>${food.pricePerServing / 100} Per serving</span>
        </div>

        <div className={styles.recipeInstructions}>
            <ItemList food={food}/>
          <h2>Instructions</h2>
         
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            food.analyzedInstructions?.[0]?.steps?.map((step) => (
              <li key={step.number}>{step.step}</li>
            ))
          )}
        </div>
      </div>
      <span>
        <strong>Ready in {food.readyInMinutes} Minutes🕖</strong>
      </span>
      <span> {food.vegetarian ? "🥕Vegetarian" : "🍖non-Vegetarian"}</span>
      <div>
        <strong>Serves {food.servings}</strong>
      </div>
    </div>
  );
}
