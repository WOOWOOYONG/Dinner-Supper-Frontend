import { DinnerContext } from '../context/dinnerContext';
import { useContext } from 'react';

export const useDinnerContext = () => {
  const context = useContext(DinnerContext);

  if (!context) {
    throw Error('useDinnerContext 必須要放在 DinnersContextProvider');
  }

  return context;
};
