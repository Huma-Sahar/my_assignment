import React from "react";
import './App.css';
 



const MediaCard = ({title,body,imageUrl}) =>{
  return(
    <>
    <h2>{title}</h2>
    <p>{body}</p>
     <img src = {imageUrl} width= "200" alt = "imag"/> 


    </>
  )


}
export default MediaCard;
