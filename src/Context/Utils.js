
export const initialState = {
    theme: 'light',
    dentists: [],
    favs: []
  };
  
  export function reducer(state, action) {
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