import React from "react";
import ReactDOM from "react-dom";





const Header = ()=>{
    return(<>
    <div className="header">
      <div className="logo-container">
       <img  className="logo" src="https://c8.alamy.com/comp/PCYG1J/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>home</li>
          <li>about us</li>
          <li>contact us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
   </>
    );
}





const AppLayout = ()=>{
    return (
    <>
       
    <Header/>  

    </>)
    
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)