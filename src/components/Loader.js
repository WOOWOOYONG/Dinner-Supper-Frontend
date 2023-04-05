import { ColorRing } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#9c6644', '#b08968', '#ddb892', 'ddb892', 'e6ccb2']}
      />
    </div>
  );
};

export default Loader;
