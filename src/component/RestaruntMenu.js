import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";



const RestaruntMenu =()=>{
const [resInfo, setResInfo] = useState(null);

useEffect(()=>{
    fetchMenu();
},[]);

const fetchMenu= async() => {
const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=425&submitAction=ENTER");
const json = await data.json();
console.log(json);
setResInfo(json.data);
};

if(resInfo === null) return <Shimmer />;
console.log(resInfo.cards[2].card.card.info.name);
const {name, cuisines ,cloudinaryImageId ,costForTwoMessage } 
= resInfo.cards[2].card.card.info;

return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{costForTwoMessage}</h4>
            <ul>
                <li>Burger</li>
                <li>Pizza</li>
                <li>Samosa</li>
                <li>Pasta</li>
            </ul> 

        </div>
    )
};

export default RestaruntMenu;