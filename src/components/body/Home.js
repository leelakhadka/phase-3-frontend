import React from "react";

const jazzPicture = new URL("./images/jazz2.jpeg", import.meta.url)
function Home() {

    return (
        <div>
            <img src={jazzPicture} />
        </div >
    )
}

export default Home;