import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
            
                            <div className="card">
                    <div className="card-body">
                    <h2 className="card-title">Name: {props.name}</h2>
                       
                        <h4 className="card-title">descriptions : {props.descriptions}</h4>
                        <h4 className="card-title">IMDB Rating : {props.imdb_rating}</h4>
                        <h4 className="card-title">Genre: {props.genre} </h4>
  </div>
</div>
                            </div>
        </>
        
    );
}

export default Card;