import FoodItems from "./components/fooditems";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "./components/container";
import Foodinput from "./components/Foodinput";
import './App.css';

function App() {
  let foodItems = ['sabzi', 'dal', 'veggis', 'chawal']
  let textToShow = "Food Item Entered by user";
  const handleonCHange =(event)=>{
    console.log(event.target.value)
    textToShow= event.target.value
}

  return (
    <>
       <Container>
    <h1 className='food-heading'> Healthify</h1>
    
    <Foodinput handleonCHange={handleonCHange}></Foodinput>
    <p>{textToShow}</p>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
    {/* <Container>
      <p>Above are the foods which are good for health and well being for a person</p>
    </Container> */}
    </>
  )
   
  
}

export default App
