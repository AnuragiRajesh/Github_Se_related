import React from "react";
const items = ["tomato","potato","chilly","carrot"]
const data = [
    {name:"rajesh", id:19, email:"exmal@gmail.com"},
    {name:"vikash", id:190, email:"exmalll@gmail.com"}
]

export default function List(){

    return(
        <ul>
            {data.map((para,index)=>
            <li key={para.id}>{para.name}</li>)}
        </ul>
    )
}