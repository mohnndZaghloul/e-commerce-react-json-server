import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

// eslint-disable-next-line react/prop-types
function Rating({ rating }) {
    const yellowStars = Math.floor(rating);
    const halfStar = rating !== Math.floor(rating);
    const emptyStar = 5 - rating;

  return (
    <div className='flex text-lg relative'>
        {
            [...Array(yellowStars)].map((star, index) => (
                <BsStarFill key={index}/>
            ))
        }
        {halfStar && <BsStarHalf />}
        {[...Array(Math.floor(emptyStar))].map((star, index) => (
            <BsStar key={index}/>
        ))}
    </div>
  )
}

export default Rating;