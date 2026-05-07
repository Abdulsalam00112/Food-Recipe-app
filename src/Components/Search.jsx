import styles from "./search.module.css"
import { useEffect, useState } from "react";


const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "7f8bf0b4c25542d99459a95c4a09f822";

export default function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("pizza");

  //   Syntax of UseEffect hook
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results);
    }
    fetchFood();
  }, [query]);
  return (
    <div  className={styles.searchContainer}>
      <input
      className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}
