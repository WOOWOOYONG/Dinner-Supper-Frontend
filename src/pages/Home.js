import { useEffect } from 'react';
import { useDinnerContext } from '../hooks/useDinnersContext';

//components
import DinnerDetails from '../components/DinnerDetails';
import DinnerForm from '../components/DinnerForm';

const Home = () => {
  const { dinners, dispatch } = useDinnerContext();

  useEffect(() => {
    const getApiData = async () => {
      const res = await fetch('https://dinner-supper-api.onrender.com/');
      const data = await res.json();
      if (res.ok) {
        dispatch({ type: 'SET_DINNERS', payload: data });
      }
    };
    getApiData();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="dinners">
        {/* 如果dinners有東西，執行後面的function */}
        {dinners &&
          dinners.map((dinner) => (
            <DinnerDetails key={dinner._id} dinner={dinner} />
          ))}
      </div>
      <DinnerForm />
    </div>
  );
};

export default Home;
