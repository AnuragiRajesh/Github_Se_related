import React from "react";


const items = ["tomato", "potato", "carrot", "radish"]
const data = [{ name: "vikas", id: 45, }, { name: "Sai-Kiran", id: 65 }]

export default function List1() {
    return (
        <ul>
            {
                data.filter((ele, inde) => {
                    return (<li>
                        {ele.name}
                    </li>)
                }) 
            }
        </ul>
    )
}