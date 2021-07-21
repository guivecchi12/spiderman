import React from "react";
import HeaderNav from './headerNav';
import '../CSS/home.css';
const Home = () => {
    return (      
        <div className="homeComponent">
            <HeaderNav/>
            <div className="quote">
                <p>
                   Music, once admitted to the soul, becomes a sort of spirit, and never dies.
                   <br/>
                   - Edward Bulwer Lytton
                </p>
            </div>
        </div>     
    )
}

export default Home;