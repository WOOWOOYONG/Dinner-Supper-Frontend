import { useDinnerContext } from '../hooks/useDinnersContext';

//date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const DinnerDetails = ({ dinner }) => {
  const { dispatch } = useDinnerContext();
  const handleClick = async () => {
    const res = await fetch(
      'https://dinner-supper-api.onrender.com/' + dinner._id,
      {
        method: 'DELETE',
      }
    );
    const data = await res.json();
    if (res.ok) {
      dispatch({ type: 'DELETE_DINNER', payload: data });
    }
  };

  return (
    <div className="dinner-details">
      <h4>
        <strong>{dinner.name}</strong>
      </h4>
      <img src={dinner.imgUrl} alt="dinner" />
      <p>地址: {dinner.address}</p>
      <p>種類: {dinner.type}</p>
      <p>
        {formatDistanceToNow(new Date(dinner.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        delete
      </span>
    </div>
  );
};

export default DinnerDetails;
