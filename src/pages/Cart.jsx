import { useState, useEffect } from "react";
import { Loading, CartItems, Heading} from '../components/index';
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../store/slices/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const [products, setProducts] = useState(cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCart());
  },[dispatch])
  
  useEffect(() => {
    setProducts(cart);
  },[cart])


  const getTotal = () => {
    let total = 0;
    products.forEach(product => {
      total += ( product.amount * product.price );
    });
    return total.toFixed(2);
  }

  return (
    <div className="container mt-10 lg:w-2/3">
    <Heading title="Cart"/>
    <div className="relative overflow-hidden py-10 mt-2 sm:mt-12 flex justify-center items-center border-[1px] rounded-3xl border-green-100">
      <div className="m-4 w-full gap-y-4 grid grid-cols-1">
        <div className="flex justify-between text-xl sm:text-2xl font-bold bg-green-100 bg-opacity-40 px-10 py-4 z-30 border-[1px] border-darkshadow-100 rounded-2xl">
          <p>Total:</p>
          <p>{getTotal()} $</p>
        </div>
        {products[0] ? products.map((item, index) => (
          <CartItems key={index} {...item}/>
        ))
        :
        <div className="col-span-3">
          <Loading />
        </div>
      }
      </div>
      <div className="absolute w-72 h-72 bg-green-100 rounded-full opacity-70 z-10 -left-10 -bottom-48"></div>
      <div className="absolute w-32 h-32 bg-darkshadow-100 rounded-full opacity-60 z-10 -right-16 -bottom-10"></div>
      <div className="absolute w-72 h-72 bg-green-100 rounded-full opacity-40 z-10 -right-10 -top-56"></div>
      <div className="absolute w-40 h-40 bg-darkshadow-100 rounded-full opacity-20 z-10 -top-20 -left-10"></div>
    </div>
  </div>
  )
}

export default Cart;