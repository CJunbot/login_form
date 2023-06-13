import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { authService } from "fbase";

const Navigation = () => {
const navigate = useNavigate();
const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
};
return(
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">My Profile</Link></li>
            <li><button onClick={onLogOutClick}>Log Out</button></li>
        </ul>
    </nav>
)

};
export default Navigation;