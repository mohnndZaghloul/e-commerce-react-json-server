import axios from "axios";
import { Heading, Input } from '../components/index';
import { USERS_URL } from "../constants/api-url";
import { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
    phone: ''
  });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const {id, value} = e.target;
    setUserData((prev) => ({...prev, [id]:value}));
  }
  
  const validation = async () => {
    const res = await axios.get(USERS_URL);
    const users = await res.data;
    let checkEmailFlag = true;
    let validationFlag = true;
    let passFlag = true;
    let passSizeFlag = true;
    let emailPattern = false;

    if(userData.email.toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )){
      emailPattern = true;
    }
    
    if(userData.password.length < 8) {
      passSizeFlag = false;
    }

    if(userData.password !== userData.password2) {
      passFlag = false;
    }
    
    for (const prop in userData) {
      if(userData[prop] == '') {
        validationFlag = false;
      }
    }

    users.forEach((user) => {
      if(user.email === userData.email) {
        checkEmailFlag = false;
      }
    });
    return {checkEmailFlag, emailPattern, validationFlag, passFlag, passSizeFlag};
  }
  
  const registerHandler = async (e) => {
    const {checkEmailFlag, emailPattern, validationFlag, passFlag, passSizeFlag} = await validation();
    if(validationFlag) {
      if(passSizeFlag && passFlag){
        if(emailPattern){
          if(checkEmailFlag) {
            e.preventDefault();
            axios.post(USERS_URL, userData);
            Swal.fire({
              icon: 'success',
              title: 'Sign In Successfully',
              showConfirmButton: false,
              timer: 1500
            })
            navigate('/logIn');
          }else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'This email had been used before..',
              confirmButtonColor: "#3ae374",
            })
          }
        }else{
          Swal.fire({
            icon: 'error',
            title: 'Email is not valid',
            text: 'Must write a true email pattern',
            confirmButtonColor: "#3ae374",
          })
        }
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Password is not valid',
          text: 'Password must be more than 8 number/character',
          confirmButtonColor: "#3ae374",
        })
      }
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Please fill empty fields',
        text: 'All fields are required',
        confirmButtonColor: "#3ae374",
      })
    }
  }

  return (
    <div className="container pt-20">
        <Heading title="Sign In"/>
        <form className="border-[1px] border-green-100 rounded-3xl shadow-xl py-10 px-10 sm:px-20 lg:w-2/3 mx-auto my-10">
            <div className="flex flex-wrap sm:flex-nowrap gap-2">
                <Input id='firstname' onchange={changeHandler} placeholder={"First Name"} type={'text'} isInput={true}/>
                <Input id='lastname' onchange={changeHandler} placeholder={"last Name"} type={'text'} isInput={true}/>
            </div>
            <Input id='email' onchange={changeHandler} placeholder={"Email"} type={'email'} isInput={true}/>
            <Input id='password' onchange={changeHandler} placeholder={"Password"} type={'password'} isInput={true}/>
            <Input id='password2' onchange={changeHandler} placeholder={"Password Again"} type={'password'} isInput={true}/>
            <Input id='phone' onchange={changeHandler} placeholder={"Phone Number"} type={'tel'} isInput={true}/>
            <button onClick= {registerHandler} className="btn w-full my-4 shadow-2xl">Register</button>
        </form>
    </div>
  )
}

export default Registration