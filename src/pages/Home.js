import { useEffect, useState } from 'react';
import { useDinnerContext } from '../hooks/useDinnersContext';

//components
import DinnerDetails from '../components/DinnerDetails';
import DinnerForm from '../components/DinnerForm';
import Loader from '../components/Loader';

const Home = () => {
  const { dinners, dispatch } = useDinnerContext();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getApiData = async () => {
      const res = await fetch('https://dinner-supper-api.onrender.com/');
      const data = await res.json();
      if (res.ok) {
        dispatch({ type: 'SET_DINNERS', payload: data });
        setLoading(false);
      }
    };
    getApiData();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="dinners">
        {loading ? (
          <Loader />
        ) : (
          dinners.map((dinner) => (
            <DinnerDetails key={dinner._id} dinner={dinner} />
          ))
        )}
        {/* 如果dinners有東西，執行後面的function */}
        {/* {dinners &&
          dinners.map((dinner) => (
            <DinnerDetails key={dinner._id} dinner={dinner} />
          ))} */}
      </div>
      <DinnerForm />
    </div>
  );
};

export default Home;
