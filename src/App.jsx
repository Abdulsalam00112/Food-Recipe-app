import { useState } from "react";
import Search from "./Components/Search";
import Foodlist from "./Components/FoodList";
import Nav from "./Components/nav";
import "./App.css";
import Container from "./Components/Container";
import InnerContainer from "./Components/InnerContainer";
import FoodDetails from './Components/FoodDetails';

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodID, setFoodID] = useState("56320")
  return (
    <div className="App">
      <Nav />
      <Search foodData={foodData} setFoodData={setFoodData} />
      <Container>
      <InnerContainer> 
        <Foodlist setFoodID={setFoodID} foodData={foodData} />
      </InnerContainer>
       <InnerContainer><FoodDetails foodID={foodID}/></InnerContainer>
       
      </Container>
    </div>
  );
}

export default App;
