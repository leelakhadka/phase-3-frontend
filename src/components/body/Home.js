
import React from "react";
import Jazz2 from "./images/jazz2.jpeg"
import Jazz from "./images/jazz.webp"
import Salsa from "./images/salsa2.jpeg"

function Home() {
    return (
        <div>
            <h1 className="container">Welcome to Leela's Dance Studio</h1>

            <div className="img-container">
                <img className="img-style" src={Jazz2} />
                <img className="img-style" src={Jazz} />
                <img className="img-style" src={Salsa} />
            </div>
        </div>
    );
}

export default Home;