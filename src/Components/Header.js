import React from "react";
import farmersImage from "./../Img/farmers-market.png";


function Header() {
    return (
        <React.Fragment>
            <h1>Farmers Market</h1>
            <img src={farmersImage} alt="An image of local produce" />
        </React.Fragment>
        
    );
}

export default Header;