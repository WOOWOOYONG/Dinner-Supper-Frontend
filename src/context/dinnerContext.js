import { createContext, useReducer } from 'react';

export const DinnerContext = createContext();

export const dinnersReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_DINNERS':
      return { dinners: payload };
    case 'CREATE_DINNER':
      return {
        dinners: [payload, ...state.dinners],
      };
    case 'DELETE_DINNER':
      return {
        dinners: state.dinners.filter((d) => d._id !== payload._id),
      };
    default:
      return state;
  }
};

export const DinnerContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dinnersReducer, {
    dinners: null,
  });

  return (
    <DinnerContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DinnerContext.Provider>
  );
};
