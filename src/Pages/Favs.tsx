import React from 'react';
import { useGlobalContext } from '../Context/GlobalContext';
import '../Style/Favs.css'; 

interface Fav {
  id: number;
  name: string;
  username: string;
}

const Favs: React.FC = () => {
  const { state } = useGlobalContext();

  if (!state.favs || state.favs.length === 0) {
    return <p>No favorites found.</p>;
  }

  return (
    <div>
      <h2>Favorites</h2>
      {state.favs.map((fav: Fav) => (
        <div key={fav.id}>
          <h3>{fav.name}</h3>
          <p>{fav.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Favs;
