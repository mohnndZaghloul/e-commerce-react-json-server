import { BiLogo500Px, BiUser } from 'react-icons/bi';
import { BsArrowBarLeft } from 'react-icons/bs';
import { BsCart2 } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

import './components.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/slices/userSlice';
import Swal from 'sweetalert2';


function Nav() {
    const [toggle, setToggle] = useState(false);
    const { id, name } = useSelector((state) => state.user);
    const productsNum = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const logoutHandler = () => {
        Swal.fire({
            title: 'Are you sure ?',
            text: "You will log out !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3ae374',
            cancelButtonColor: '#ff3838',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: 'success',
                    title: 'Log out',
                    showConfirmButton: false,
                    timer: 1500
                })
                dispatch(logOut());
            }
        })
        toggleHandler();
    }

    const toggleHandler = () => {
        setToggle(!toggle);
    }

    return (
    <nav className="sticky top-0 w-full text-green-100 bg-darkshadow-200 z-50">
        <div className='flex container items-center justify-between'>
            <div>
                <NavLink to="/">
                    <BiLogo500Px className='text-5xl my-2 hover:text-green-200 transition'/>
                </NavLink>
            </div>
            <div className='hidden sm:flex text-sm'>
                <NavLink to="/" className='link'>Store</NavLink>
                <NavLink to="contactUs" className='link'>Contact Us</NavLink>
                <NavLink to="cart" className='relative my-5 mx-4 hover:text-green-200'>
                    <BsCart2 className='text-2xl'/>
                    {productsNum.length == 0 ? null : <div className='w-5 h-4 bg-green-100 text-darkshadow-100 flex justify-center items-center rounded-full text-xs font-bold absolute -top-3 -right-3'>
                        {productsNum.length}
                    </div>}
                </NavLink>
                {name ? 
                <>
                    <NavLink to={`profile/${id}`} className='link flex gap-2 capitalize'><BiUser className='text-2xl'/>{name}</NavLink>
                    <NavLink onClick={logoutHandler} to="/" className='link bg-green-100 text-darkshadow-100 font-medium'>Log Out</NavLink>
                </>
                :
                <>
                    <NavLink to="logIn" className='link flex gap-2'><BiUser className='text-2xl'/>Log In</NavLink>
                    <NavLink to="registration" className='link bg-green-100 text-darkshadow-100 font-medium'>Sign in</NavLink>
                </>
                }
            </div>
            <div className="block sm:hidden">
                <BsArrowBarLeft onClick={toggleHandler} className='text-2xl'/>
            </div>
        </div>
        <div className={`flex flex-col items-end bg-darkshadow-200 transition fixed right-0 ${toggle ? 'translate-x-0':'translate-x-full'} sm:translate-x-full h-screen w-2/3`}>
            <NavLink onClick={toggleHandler} to="/" className='link w-full'>Store</NavLink>
            <NavLink onClick={toggleHandler} to="contactUs" className='link w-full'>Contact Us</NavLink>
            <NavLink onClick={toggleHandler} to="cart" className='w-full pl-8 relative my-5 mx-4 hover:text-green-200'>
                <BsCart2 className='text-2xl'/>
                {productsNum.length == 0 ? null : <div className='w-5 h-4 bg-green-100 text-darkshadow-100 flex justify-center items-center rounded-full text-xs font-bold absolute top-0 right-0'>
                    {productsNum.length}
                </div>}
            </NavLink>
            {name ?
            <>
                <NavLink onClick={toggleHandler} to={`profile/${id}`} className='link flex gap-2 w-full capitalize'><BiUser className='text-2xl'/>{name}</NavLink>
                <NavLink onClick={logoutHandler} to="/" className='link w-full bg-green-100 text-darkshadow-100 font-medium'>Log Out</NavLink>
            </>
            :
            <>
                <NavLink onClick={toggleHandler} to="logIn" className='link flex gap-2 w-full'><BiUser className='text-2xl'/>Log In</NavLink>
                <NavLink onClick={toggleHandler} to="registration" className='link w-full bg-green-100 text-darkshadow-100 font-medium'>Sign In</NavLink>
            </>
            }
        </div>
    </nav>
  )
}

export default Nav;