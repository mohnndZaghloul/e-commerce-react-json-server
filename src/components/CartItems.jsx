/* eslint-disable react/prop-types */
import {TbSquareRoundedPlusFilled, TbSquareRoundedMinusFilled, TbSquareRoundedXFilled} from 'react-icons/tb';
import Rating from './Rating';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, deleteFromCart, removeFromCart } from '../store/slices/cartSlice';

function CartItems({id, title, image, price, rating, amount}) {
    const [newPrice, setNewPrice] = useState(price);
    const [count, setCount] = useState(amount);
    const dispatch = useDispatch();

    useEffect(() =>{
        setNewPrice((price * count).toFixed(2));
    },[count, price])

    //increse and decrese count of product
    const handlerCountUp = () => {
        dispatch(addToCart({id}))
        setCount(count + 1);
    }
    const handlerCountDown = () => {
        dispatch(removeFromCart({id}));
        if (count > 1) {
            setCount(count - 1);
        }
    }
    const handlerRemoveProduct = () => {
        dispatch(deleteFromCart({id}));
    }

return (
    <div className="flex justify-between items-center gap-1 p-4 sm:p-5 border-[1px] border-green-100 rounded-2xl">
        <div className="w-1/3 sm:w-1/5 p-4">
            <img src={image} className="h-full" alt={title} />
        </div>
        <div className="font-semibold flex-1 flex flex-col justify-between">
            <div className='flex justify-between'>
                <p className="text-lg sm:text-2xl line-clamp-2 font-medium text-darkshadow-100">
                    {title}
                </p>
                <button onClick={handlerRemoveProduct}><TbSquareRoundedXFilled className='remove-btn p-0 border-none text-4xl sm:text-5xl ml-auto'/></button>
            </div>
            <div className='flex font-bold justify-between my-2'>
                <p className="text-xl sm:text-2xl text-green-100">{newPrice} $</p>
                <p className='text-xl bg-green-100 py-2 px-6 rounded-2xl text-darkshadow-100'>{count}</p>
            </div>
            {rating ?
            <div className="flex items-center font-semibold gap-1 text-yellow-400">
                {rating.rate}
                <Rating rating={rating.rate}/>
            </div>:null
            }
            <div className='flex justify-end'>
                <button onClick={handlerCountUp} className='add-btn p-0 border-none text-4xl sm:text-5xl'><TbSquareRoundedPlusFilled/></button>
                <button onClick={handlerCountDown} className='remove-btn p-0 border-none text-4xl sm:text-5xl'><TbSquareRoundedMinusFilled /></button>
            </div>
        </div>
    </div>
  )
}

export default CartItems;