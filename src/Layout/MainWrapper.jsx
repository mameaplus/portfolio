import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Contents/Header/Header";
 
function MainWrapper()
{
    return(
        <>
        
    <Header/> 
    <div className="main-wrapper">
       <Outlet/>
    </div>
        </>
    );
}

export default MainWrapper;