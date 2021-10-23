import React from "react";
import './App.css';
import MediaCard from "./mediaCard";
import imageUrl from "./pic-1.jpg"
import Gate from "./Gate";



const App = () =>{
  return(
    <>
    <MediaCard title= "Pakistan" body = {<div>I am <b>Pakistani</b> </div>} imageUrl = {imageUrl} />
     <Gate isOpen ={true}/>

    </>
  )


}
export default App;
