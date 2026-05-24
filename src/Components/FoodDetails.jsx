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
      setIsLoading(true);
      try {
        const res = await fetch(`${URL}?apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data);
        setFood(data);
      } catch (error) {
        console.error("Error fetching recipe information:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchFood();
  }, [foodID]);

  if (isLoading) {
    return (
      <div className={styles.recipeCard}>
        <div className={styles.loadingContainer}>
          <div className={styles.spinner}></div>
          <p>Cooking up details for you...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.recipeCard}>
      <h1 className={styles.recipeName}>{food.title}</h1>
      <img className={styles.image} src={food.image} alt={food.title} />

      <div className={styles.recipeDetails}>
        <span className={styles.badge}>
          ⏱️ Ready in <strong>{food.readyInMinutes}</strong> Mins
        </span>
        <span className={styles.badge}>
          👥 Serves <strong>{food.servings}</strong>
        </span>
        <span className={`${styles.badge} ${food.vegetarian ? styles.badgeVeg : ""}`}>
          {food.vegetarian ? "🥦 Vegetarian" : "🍖 Non-Vegetarian"}
        </span>
        <span className={styles.badge}>
          💲 <strong>{(food.pricePerServing / 100).toFixed(2)}</strong> Per serving
        </span>
      </div>

      <div className={styles.recipeInstructions}>
        <h2 className={styles.sectionTitle}>🛒 Ingredients</h2>
        <ItemList food={food} isLoading={isLoading} />

        <h2 className={styles.sectionTitle}>🍳 Instructions</h2>
        <ol className={styles.instructionsList}>
          {food.analyzedInstructions?.[0]?.steps?.map((step) => (
            <li key={step.number} className={styles.instructionStep}>
              {step.step}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
