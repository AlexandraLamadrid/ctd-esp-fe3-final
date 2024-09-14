import React from "react";


const Card = ({ name, username, id }) => {

  const addFav = ()=>{
  }

  return (
    <div className="card">
        {}

        {}

        {}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
