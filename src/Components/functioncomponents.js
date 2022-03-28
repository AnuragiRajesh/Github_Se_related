import React from "react";
function Profile(l){
    const Checking= ()=>{
        alert("Checking onClick")
    }
    return <div>
        <h2 onClick={Checking}>btn</h2>
    </div>
}
export default Profile