import styles from "./foodlist.module.css"
import FoodItem from "./FoodItem";
export default function Foodlist({ foodData = [], setFoodID}) {
  return (
    <div className={styles.container}>
      {foodData.map((food)=>(
        <FoodItem key={food.id} food={food} setFoodID={setFoodID}/>
      ))}
    </div>
  );
}
                                  