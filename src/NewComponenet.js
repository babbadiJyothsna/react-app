import React from "react";
import ReactDOM from "react-dom";
export default function NewComponenet() {
    return ( <
        div >
        <
        h1 > React Pactice < /h1>  <
        img src = './loginimage.png'
        alt = "no img available" / >

        <
        /div>
    );
}

ReactDOM.render( < NewComponenet / > , document.getElementById("root"));