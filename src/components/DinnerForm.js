import { useState } from 'react';
import { useDinnerContext } from '../hooks/useDinnersContext';

const DinnerForm = () => {
  const { dispatch } = useDinnerContext();
  const [name, setName] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dinner = { name, imgUrl, address, type };
    const res = await fetch('https://dinner-supper-api.onrender.com/', {
      method: 'POST',
      body: JSON.stringify(dinner),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error);
      setEmptyFields(data.emptyFields);
    }
    if (res.ok) {
      setName('');
      setImgUrl('');
      setAddress('');
      setType('');
      setError(null);
      setEmptyFields([]);
      console.log('成功新增晚餐', data);
      dispatch({ type: 'CREATE_DINNER', payload: data });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>新增晚餐</h3>
      <label>餐廳名稱：</label>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className={emptyFields.includes('name') ? 'error' : ''}
      />
      <label>圖片連結：</label>
      <input
        type="text"
        onChange={(e) => setImgUrl(e.target.value)}
        value={imgUrl}
        className={emptyFields.includes('imgUrl') ? 'error' : ''}
      />
      <label>餐廳地址：</label>
      <input
        type="text"
        onChange={(e) => setAddress(e.target.value)}
        value={address}
        className={emptyFields.includes('address') ? 'error' : ''}
      />
      <label>晚餐類型：</label>
      <input
        type="text"
        onChange={(e) => setType(e.target.value)}
        value={type}
        className={emptyFields.includes('type') ? 'error' : ''}
      />
      <div className="submit-btn">
        <button>送出</button>
      </div>

      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default DinnerForm;
