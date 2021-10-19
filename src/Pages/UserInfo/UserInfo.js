import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './UserInfo.css'

const UserInfo = () => {
    const { user, loginUser } = useAuth();
    console.log(user)
    return (

        <div className="userInfo row">
            {user?.email ? <div>
                <div className="container col-md-6 userInfo-contents">
                    <div className="userImg">
                        <img src={user?.photoURL} alt="" />
                    </div>
                    <h2 className="text-center "><span>{user?.displayName}</span></h2>
                    <h4 className="text-center">{user?.email}</h4>
                    {user?.phoneNumber && <h4 className="text-center">Phone:  {user?.phoneNumber}</h4>}
                    <h4 className="text-center">Your Unique id: <span>{user?.uid}</span></h4>
                    <h4 className="text-center">Last Sign in: {user?.metadata?.lastSignInTime}</h4>
                </div>




            </div>
                : <div className="userLogout">
                    <Link to="/home"><button className="userBtn">Back Home</button></Link>
                    <p></p>
                </div>
            }
        </div>


    );
};

export default UserInfo;