import styles from "./fooditem.module.css"
export default function FoodItem({food, setFoodID}){
return(
    <div className={styles.container}>
    <div className={styles.itemContainer}>
        <img className={styles.itemImage} src={food.image} alt="" />
        <div className={styles.itemContent}>
            <p className={styles.itemName}>{food.title}</p>
<h1></h1>
        </div>
        <div className={styles.buttonContainer}>
<button  onClick={()=>{
    console.log(food.id)
     setFoodID(food.id)}}
      className={styles.button}>View Recipe</button>
        </div>
          
    </div>
    </div>

)
}