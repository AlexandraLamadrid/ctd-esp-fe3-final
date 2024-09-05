import { useReducer, useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from './GlobalContext';

const initialState = {
  theme: 'light', 
  dentists: [], 
  favs: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_DENTISTS':
      return { ...state, dentists: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] };
    default:
      return state;
  }
}

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useGlobalContext = () => useContext(GlobalContext);
