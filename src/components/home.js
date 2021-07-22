import React from "react";
import '../CSS/home.css';
const Home = () => {
    return (      
        <div className="homeComponent">
            <div className="quote">
                <p>
                    "Anyone can win a fight when the odds are easy! It’s when the going’s tough when there seems to be no chance – that’s when it counts.”
                    <br/>
                    <span className="author">
                        ― Spiderman
                    </span>
                </p>
            </div>
        </div>     
    )
}

export default Home;