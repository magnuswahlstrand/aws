import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {SignupForm} from "./SignupForm";
import {SigninForm} from "./SigninForm";


interface Props {
    isAuthenticated: boolean;
}

export default function AppRoutes({isAuthenticated}: Props) {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<div>Logged in</div>}/>
                <Route path="*" element={<Navigate to="/" replace/>}/>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/sign_up" element={<SignupForm/>}/>
            <Route path="/sign_in" element={<SigninForm/>}/>
            <Route path="*" element={<Navigate to="/sign_in" replace/>}/>
        </Routes>
    )
}
