import PizzaImg from "../images/pizza.png";
import BurgerImg from "../images/hamber.png";
import cocaImg from "../images/coca.png";
import saladImg from "../images/salad.png";
import waterImg from "../images/water.png";
import iceCreamImg from "../images/icecream.png";
import kebabImg from "../images/kebab.png";

export function getData() {
    return [
        {title: "Pizaa", price: 17.99, image: PizzaImg},
        {title: "Burger", price: 15, image: BurgerImg},
        {title: "Coca", price: 3.5, image: cocaImg},
        {title: "Kebab", price: 13.99, image: saladImg},
        {title: "Salad", price: 2.5, image: waterImg},
        {title: "Bottle of Water", price: 0.99, image: iceCreamImg},
        {title: "IceCream", price: 2.99, image: kebabImg}
    ];
}