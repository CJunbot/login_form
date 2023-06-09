import React, {useState} from "react";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Signup from "../routes/Signup";
import Navigation from "./Navigation";
import Profile from "../routes/profile";


const AppRouter = ( {refreshUser, isLoggedIn, userObj} ) => {
    return(
        <Router>
            {isLoggedIn && <Navigation userObj={userObj} />}
            <Routes>
                {
                    isLoggedIn ?
                    // fragment for render many components without div or parents component
                    <>
                        <Route path='/' element={<Home userObj={userObj} />}/>
                        <Route path='/' element={<Profile userObj={userObj}  refreshUser={refreshUser}/>}/>
                    </>
                :
                        <>
                            <Route path='/' element={<Auth/>}/>
                            <Route path='/signup' element={<Signup/>}/>
                        </>
                }
                </Routes>
        </Router>
    )
}

export default AppRouter