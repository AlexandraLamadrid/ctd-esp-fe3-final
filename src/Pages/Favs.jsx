//import React from "react";
import { useGlobalContext } from "../Context/GlobalContext";

function Favs() {
  const { state } = useGlobalContext();

  return (
    <div>
      <h2>Favs</h2>
      {state.favs.map((fav) => (
        <div key={fav.id}>
          <h3>{fav.name}</h3>
          <p>{fav.username}</p>
        </div>
      ))}
    </div>
  );
}

export default Favs;
