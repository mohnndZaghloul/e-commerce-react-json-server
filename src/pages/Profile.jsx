import axios from "axios";
import { useEffect, useState } from "react";
import { USERS_URL } from "../constants/api-url";
import { useSelector } from "react-redux";
import { BiUser } from 'react-icons/bi';
import { NavLink } from "react-router-dom";

function Profile() {
    const [userDetails, setUserDetails] = useState({});
    const userID = useSelector((state) => state.user.id);

    useEffect(() => {
        getUserDetails();
    },[])

    const getUserDetails = async () => {
        const res = await axios.get(`${USERS_URL}/${userID}`)
        const data = await res.data;
        setUserDetails(data);
    }
  return (
    <>
    <div className="container py-10 mt-2 sm:mt-12 border-[1px] rounded-3xl border-green-100 text-darkshadow-100">
        <div className="container py-10 mt-2 sm:mt-12 flex justify-center items-center gap-4">
            <div className="mb-auto">
                <BiUser className='text-7xl sm:text-8xl border-[1px] border-green-200 rounded-full p-2'/>
            </div>
            <div className="flex flex-col gap-y-2">
                <p className="text-2xl sm:text-3xl font-semibold capitalize">{`${userDetails.firstname} ${userDetails.lastname}`}</p>
                <p className=" opacity-70">Email : {userDetails.email}</p>
                <p className=" opacity-70">Phone Number : +2{userDetails.phone}</p>
            </div>
        </div>
        <div className="flex justify-center gap-4 mt-4 text-sm sm:text-base">
            <NavLink className="btn-sec">Change Password</NavLink>
            <NavLink className="btn">Change Phone Number</NavLink>
        </div>
    </div>
    </>
  )
}

export default Profile;