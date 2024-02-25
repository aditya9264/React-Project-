import FoodItems from "./components/fooditems";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import Container from "./components/container";
function App() {
  let foodItems = ['sabzi', 'dal', 'veggis', 'chawal']
  return (<>
    <Container>
    <h1 className='food-heading'> Healthify</h1>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
    <Container>
      <p>Above are the foods which are good for health and well being for a person</p>
    </Container>
    </>
  )
}

export default App
