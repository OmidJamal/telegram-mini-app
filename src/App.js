import './App.css';
import Card from "./Components/Card/Card";
import {useState} from "react";
import Cart from "./Components/Cart/Cart";

const {getData} = require('./db/db');

const foods = getData();

function App() {

    const [cartItems, setCartItems] = useState([])

    return (
        <>
            <h1 className="heading">Order Food</h1>
            <Cart cartItems={cartItems}/>
            <div className='cards_container'>
                {foods.map(food => {
                    return <Card food={food} key={food.id}/>
                })}
            </div>
        </>
    );
}

export default App;
