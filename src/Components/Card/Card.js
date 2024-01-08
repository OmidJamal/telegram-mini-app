import React, {useState} from 'react';
import './Card.css'
import ButtonComponent from "../Buttons/ButtonComponent";
function Card({food}) {

    const [count, setCount] = useState(0);

    const {title, image, price, id} = food;

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="card">
            <span className={`${count !== 0 ? "card_badge" : "card_badge_hidden"}`}>{count}</span>
            <div className="image_container">
                <img src={image} alt={title}/>
            </div>
            <h4 className="card_title">
                {title} . <span className="card_price">{price}</span>
            </h4>
            <div className="btn_container">
                <ButtonComponent title={"+"} type={"add"} onClickHandler={handleIncrement}/>
                {count !== 0 ? (
                    <ButtonComponent title={"-"} type={"remove"} onClickHandler={handleDecrement}/>
                ) : ""}
            </div>
        </div>
    );
}

export default Card;