import React from "react";
import '../CSS/home.css';
const Home = () => {
    return (      
        <div className="homeComponent">
            <div className="quote">
                <p>
                    “It's the questions we can't answer that teach us the most. They teach us how to think. If you give a man an answer, all he gains is a little fact. But give him a question and he'll look for his own answers.”
                    <br/>
                    <span className="author">
                        ― Patrick Rothfuss
                    </span>
                </p>
            </div>
        </div>     
    )
}

export default Home;