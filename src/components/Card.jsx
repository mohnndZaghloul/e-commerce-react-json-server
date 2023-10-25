import { FaUserAlt } from 'react-icons/fa';
import { BsFillCartPlusFill } from 'react-icons/bs';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

/* eslint-disable react/prop-types */


function Card({id, title, image, price, amount, category, rating}) {
    
    const dispatch = useDispatch();
    const addFavProduct = () => {
        dispatch(addToCart({id, title, image, price, category, rating, amount}))
    }

  return (
    <div className="p-6 rounded-3xl max-h-[450px] shadow-xl border-[1px] border-green-100">
        <div className="h-1/2 flex justify-center mb-5 py-2 md:py-8">
            <img className="h-full" src={image} alt={title}/>
        </div>
        <div className='h-2/5 flex flex-col justify-between'>
            <div className='h-2/5'>
                <h2 className="text-xl line-clamp-2 font-medium text-darkshadow-100">{title}</h2>
            </div>
            <div className='h-5/6'>
                <p className=" text-2xl font-bold mb-1 text-green-100">{price} $</p>
                <div className="flex justify-between text-sm mb-4">
                    <div className="flex items-center font-semibold gap-1 text-yellow-400">
                        {rating.rate}
                        <Rating rating={rating.rate}/>
                    </div>
                    <p className="text-slate-500 flex items-center gap-1">
                        {rating.count}
                        <FaUserAlt/>
                    </p>
                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-4'>
                        <button onClick={addFavProduct} className='add-btn'><BsFillCartPlusFill/></button>
                    </div>
                    <Link to={`/details/${id}`} className='btn'>Details</Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Card;