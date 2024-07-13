import RestaruntCard from "./RestaruntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    const[listOfRestaurants, setListOfRestutrants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState('');

    useEffect(()=>{
        fetchData();
    },[]);

   // Function to filter restaurants by name

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5904779&lng=73.7271909&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();
       console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
       setListOfRestutrants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
       setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   
    };
    console.log();
    if(listOfRestaurants === 0)
        {
            return <Shimmer />;
        }
    return (
            <div className="body">
               <div className="filter">
                <div className="search">
                    <input type="text" className="search=box" 
                    value={searchText} 
                    onChange={(e)=>{
                       setSearchText(e.target.value);     
                    }}/>
                    <button type="button" className="search-btn"
                    onClick={()=>{
                        // filter the list of resturants cards and update the UI
                        //searchText
                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                            res.data.name.toLowerCase().includes(searchText.toLowerCase())
                          );
                          setFilteredRestaurant(filteredRestaurant);
                    }
                     }>  
                     Search</button>
                </div>
                    <button className="filter-btn"
                    onClick={ ()=>{
                        const filterList = listOfRestaurants.filter( (res) => res.info.avgRating > 4);
                        setListOfRestutrants(filterList);
                    }
                    }>Top Rated Resturants </button>
               </div>
               <div className="res-container">
                    {listOfRestaurants.map((restarunt) => 
                    <RestaruntCard key={restarunt.info.id} resData={restarunt}/>)}
               
               </div>
            </div>
    )
};

export default Body;