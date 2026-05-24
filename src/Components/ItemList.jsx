import Item from "./Item";
import styles from "./item.module.css";

export default function ItemList({ food, isLoading }) {
  return (
    <div className={styles.ingredientsGrid}>
      {isLoading ? (
        <p>Loading ingredients...</p>
      ) : (
        food?.extendedIngredients?.map((item) => (
          <Item key={item.id} item={item} />
        ))
      )}
    </div>
  );
}