import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { USERS_URL } from "../constants/api-url";
import axios from "axios";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { logIn } from "../store/slices/userSlice";
import { Heading, Input } from '../components/index';

function Login() {
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const {id, value} = e.target;
    setUserData((prev) => ({...prev, [id]:value}));
  }

  const validation = async () => {
    let userFlag = false;
    let userId = 0;
    const res = await axios.get(USERS_URL);
    const users = await res.data;
    users.forEach((user) => {
      if(user.email == userData.email && user.password == userData.password) {
        userFlag = true;
        userId = user.id;
      }
    });
    return {userFlag, userId};
  }

  const loginHandler = async (e) => {
    e.preventDefault();
    const {userFlag, userId} = await validation();
    if(userFlag) {
      Swal.fire({
        icon: 'success',
        title: 'Log In Successfully',
        showConfirmButton: false,
        timer: 1500
      })
      dispatch(logIn(userId));
      navigate('/');
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Wrong',
        text: 'Wrong Email or Password..',
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  return (
    <div className="container pt-20">
        <Heading title="Login"/>
        <form className="w-3/3 sm:w-2/3 lg:w-1/3 mx-auto border-[1px] border-green-100 rounded-3xl shadow-xl py-10 px-10 my-10">
            <Input id='email' onchange={changeHandler} placeholder={"Email"} type={'email'} isInput={true}/>
            <Input id='password' onchange={changeHandler} placeholder={"Password"} type={'password'} isInput={true}/>
            <div className="text-right">
              <span className="underline cursor-pointer transition hover:text-green-100">Forgot your password?</span>
            </div>
            <button onClick= {loginHandler} className="btn w-full my-8 shadow-2xl">Sign Up</button>
        </form>
    </div>
  )
}

export default Login