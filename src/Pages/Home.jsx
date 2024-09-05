import  { useEffect } from 'react';
import axios from 'axios';
import { useGlobalContext } from '../Context/GlobalContext';

function Home() {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        dispatch({ type: 'SET_DENTISTS', payload: response.data });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch]);

  if (!state.dentists.length) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      {state.dentists.map((dentist) => (
        <div key={dentist.id}>
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
}

export default Home;
