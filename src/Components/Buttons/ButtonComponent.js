import React from 'react';
import "./ButtonComponent.css";
function ButtonComponent({type, title, disable, onClickHandler}) {
    return (
        <button
            className={`btn ${
                (type === "add" && "add") ||
                (type === "remove" && "remove") ||
                (type === "checkout" && "checkout")
            }`}
            disabled={disable}
            onClick={onClickHandler}
        >
            {title}
        </button>
    );
}

export default ButtonComponent;