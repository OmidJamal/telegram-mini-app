import './App.css';
import Card from "./Components/Card/Card";
import {useEffect, useState} from "react";
import Cart from "./Components/Cart/Cart";

const {getData} = require('./db/db');

const foods = getData();

const tel = window.Telegram.WebApp;
function App() {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        tel.ready();
    }, []);

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

    const onCheckout = () => {
        tel.MainButton.text = "Pay :)"
        tel.MainButton.show();
    }

    return (
        <>
            <h1 className="heading">Order Food</h1>
            <Cart cartItems={cartItems} onCheckout={onCheckout}/>
            <div className='cards_container'>
                {foods.map(food => {
                    return <Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove}/>
                })}
            </div>
        </>
    );
}

export default App;
