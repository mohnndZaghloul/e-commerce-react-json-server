import {  useParams } from "react-router-dom";
import { FaUserAlt } from 'react-icons/fa';
import { BsFillCartPlusFill } from 'react-icons/bs';
import { useEffect, useState } from "react";
import axios from "axios";
import { PRODUCTS_URL } from "../constants/api-url";
import { addToCart } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { Rating, Loading} from '../components/index';

// eslint-disable-next-line react/prop-types
function Details() {
  const params = useParams();
  const [product, setProduct] = useState({});
  
  //get product details by Id using params and fetch the api url
  const API_URL = `${PRODUCTS_URL}/${params.productID}`;

  //get products from server to render
  useEffect(() => {
    try {
      axios.get(API_URL)
      .then(res=> setProduct(res.data));
    } catch (error) {
      console.error(error);
    }
  },[API_URL])

  const dispatch = useDispatch();
  const addFavProduct = () => {
    dispatch(addToCart({...product}))
  }
  
  window.scrollTo(0, 0);
  
  return (
  <div className="container">
    <div className="relative overflow-hidden py-10 mt-12 flex justify-center items-center border-[1px] rounded-3xl border-green-100">
      { !product.image ? 
      <Loading />
      :
      <>
      <div className="w-2/5 lg:w-1/4 p-4 sm:p-10">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="w-3/5 pr-4 sm:pr-10">
        <div className="my-4">
          <h2 className=" text-2xl sm:text-4xl font-semibold text-darkshadow-100">{product.title}</h2>
          <p className="text-sm sm:text-base text-slate-500 underline underline-offset-2 decoration-green-100 decoration-2 capitalize">{product.category}</p>
        </div>
        <p className="text-gray-400 text-xs sm:text-sm font-medium">{product.description}</p>
        <div className='mb-10 sm:my-8'>
          <p className="text-xl sm:text-3xl font-bold mb-1 text-green-100">{product.price} $</p>
          {/*late render for product rating */}
          {product.rating ? <div className="flex justify-between text-sm mb-4">
            <div className="flex items-center font-semibold gap-1 text-yellow-400">
              {product.rating.rate}
              <Rating rating={product.rating.rate}/>
            </div>
            <p className="text-slate-500 flex items-center gap-1">
              {product.rating.count}
              <FaUserAlt/>
            </p>
          </div>:null}
          <div className='flex items-center'>
          <button onClick={addFavProduct} className='add-btn'><BsFillCartPlusFill/></button>
          </div>
        </div>
      </div>
      </>
      }
      <div className="absolute w-72 h-72 bg-green-100 rounded-full opacity-70 z-10 -left-10 -bottom-48"></div>
      <div className="absolute w-32 h-32 bg-darkshadow-100 rounded-full opacity-60 z-10 -right-16 -bottom-10"></div>
      <div className="absolute w-72 h-72 bg-green-100 rounded-full opacity-40 z-10 -right-10 -top-56"></div>
      <div className="absolute w-40 h-40 bg-darkshadow-100 rounded-full opacity-20 z-10 -top-20 -left-10"></div>
    </div>
  </div>
  )
}

export default Details;