import PropTypes from 'prop-types';


const Image = (props) => {
  return (
    <>
      <img
        className='bg-cover rounded-lg shadow-lg'
        src={props.url}
        alt='dalle generated picture'
        loading='lazy'
      />
    </>
  );
};

export default Image;
Image.propTypes = {
  url: PropTypes.string.isRequired,
};
