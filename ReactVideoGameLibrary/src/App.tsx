import ListGroup from "./Components/ListGroup";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

function App()
{
      let items = [
          "Latte",
          "Cappauccino",
          "Flat White",
          "Cortado",
          "Matcha"];
    
    const handleSelectItem = (item: string) => {console.log(item);};      
    
    const handleButtonPressed = ()=> {
        console.log("Button Pressed");
    }
  
    return(
        <div>
            <ListGroup items={items} heading="Drinks" onSelectItem={handleSelectItem}/>
            <Button color="primary" onPressed={handleButtonPressed}>Press Me!</Button>
        </div>
    );
}

export default App;