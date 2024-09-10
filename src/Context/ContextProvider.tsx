import React, { createContext, useReducer, useMemo, ReactNode, Dispatch } from 'react';

export const initialState = {
  theme: '',
  data: []
};

const reducer = (state: typeof initialState, action: { type: string; payload?: any }) => {
  switch (action.type) {
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    case 'SET_DATA':
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

interface ContextType {
  state: typeof initialState;
  dispatch: Dispatch<{ type: string; payload?: any }>;
}

export const ContextGlobal = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
