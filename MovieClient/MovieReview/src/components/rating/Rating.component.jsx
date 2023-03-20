import './Rating.styles.scss';

const Rating = ({thumbsDown, thumbsUp}) => {

  return (
    <div className='rating-container'>
      <h2>Movie reputation</h2>
      <div className='score-container'>
        {
          thumbsDown ? (
            <p className='score-like'>Like {thumbsDown}</p>
          ):(<p></p>)
        }
        {
          thumbsUp ? (
            <p className='score-dislike'>Dislike {thumbsUp}</p>
          ) : (<p></p>)
        }
        {/* <p className='score-percentage'>{}%</p> */}
      </div>
    </div>
  );
};

export default Rating;