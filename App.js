import React from "react";
import ReactDom from "react-dom/client";


/****
Header
-logo
-nav Items
Body
-search
-Restarunt Container
  - RestaruntCard
    -Img
    -Name of Rest. , Star Rating, Cuisine, delivery Time etc.
Footer
-CopyRight
-Links
-Address
-Contact



*/
const Header = () =>{
        return (
                <div className="header">
                <div>
                        <img className="logo" src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=768x576&vertical=center"></img>        
                </div>
                <div className="nav-items">
                   <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Cart</li>
                   </ul>

                </div>
                </div>
        );
};

const RestaruntCard = (props) =>{
        const {resName, cuisine} = props;
        return (
                <div className="res-card">
                  <img className="res-logo" alt="res-logo" src="https://b.zmtcdn.com/data/pictures/7/19100997/e6c6b1a506f9790ebb445d0d39452b53_o2_featured_v2.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*" />
                  <h3>{resName}</h3>
                  <h4>{cuisine}</h4>
                  <h4>4.2 stars</h4>
                  <h4>28 minutes</h4>
                </div>
        );
};

const Body = () =>{
        return (
                <div className="body">
                   <div className="search"> Search</div>
                   <div className="res-container">
                   <RestaruntCard resName="Indori Sarafa" cuisine="North Indian Snacks" />
                   <RestaruntCard resName="KFC" cuisine="Fried Chicken, Fast Food"/>

                   </div>
                </div>
        )
}

const AppLayout = () => {
        return (
                <div className="app">
                    <Header />
                    <Body />
                </div>
        );
};
        const root = ReactDom.createRoot(document.getElementById("root"))
        root.render( <AppLayout /> );