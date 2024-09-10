import { useEffect, useState } from 'react';
import axios from 'axios';
import { useGlobalContext } from '../Context/GlobalContext';
import '../Style/styles.css'; 

const Home = () => {
  const { state, dispatch } = useGlobalContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'SET_DENTISTS', payload: response.data });
        setLoading(false);
      });
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dentists-container"> {/* Usa la clase global */}
      {state.dentists.map((dentist) => (
        <div className="dentist-card" key={dentist.id}> {/* Usa la clase global */}
          <img src="path/to/avatar.png" alt={dentist.name} className="dentist-avatar" /> {/* Usa la clase global */}
          <h3>{dentist.name}</h3>
          <p>{dentist.username}</p>
          <button onClick={() => dispatch({ type: 'ADD_FAV', payload: dentist })}>
            Add to Favs
          </button>
          <a href={`/dentist/${dentist.id}`}>View Details</a>
        </div>
      ))}
    </div>
  );
};

export default Home;
