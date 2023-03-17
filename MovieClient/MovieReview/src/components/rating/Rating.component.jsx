import './Rating.styles.scss';

const Rating = ({movie}) => {
  const { thumbsUp, thumbsDown } = movie;

  return (
    <div className='rating-container'>
      <h2>Movie reputation</h2>
      <div className='score-container'>
        <p className='score-like'>Like {thumbsDown}</p>
        {/* <p className='score-percentage'>{}%</p> */}
        <p className='score-dislike'>Dislike {thumbsUp}</p>
      </div>
    </div>
  );
};

export default Rating;