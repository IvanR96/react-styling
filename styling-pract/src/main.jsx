
import { createRoot } from 'react-dom/client'
import './index.css'

function List(){
  return <div>
  <h2>My Favorite Foods</h2>
  <ul>
    <li>Pizza</li>
    <li>Spaghetti</li>
    <li>Tacos</li>
  </ul>
  </div>
};

const currentHour = new Date().getHours();

console.log(currentHour);
let greeting;
let color;


  if (currentHour < 12) {
    greeting = "Good Morning!";
    color= "red";
  } else if (currentHour >= 12 && currentHour < 17) {
    greeting = "Good Afternoon!";
    color = "green";
  } else {
    greeting = "Good Night!";
    color = "blue";
  }


createRoot(document.getElementById('root')).render(
  <div>
    <h1 className='heading' style={{color}}>{greeting}</h1>
    <List></List>
  </div>
)
