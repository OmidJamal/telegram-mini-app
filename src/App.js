import './App.css';
import Card from "./Components/Card/Card";
import {useState} from "react";
import Cart from "./Components/Cart/Cart";

const {getData} = require('./db/db');

const foods = getData();

function App() {

    const [cartItems, setCartItems] = useState([]);

    const onAdd = (food) => {
        const exist = cartItems.find(x => x.id === food.id);
        if (exist) {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem.id === food.id ? {...exist, quantity: exist.quantity + 1} : cartItem
                )
            );
        } else {
            setCartItems([...cartItems,{...food,quantity: 1 }])
        }
    };

    const onRemove = (food) => {
        const exist = cartItems.find(x => x.id === food.id);
        if (exist.quantity === 1){
            setCartItems(cartItems.filter(cartItem => cartItem.id !== food.id))
        } else {
            setCartItems(cartItems.map(cartItem =>
                cartItem.id === food.id ? {...exist,quantity: exist.quantity -1} : cartItem
            ))
        }
    }

    return (
        <>
            <h1 className="heading">Order Food</h1>
            <Cart cartItems={cartItems}/>
            <div className='cards_container'>
                {foods.map(food => {
                    return <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove}/>
                })}
            </div>
        </>
    );
}

export default App;
