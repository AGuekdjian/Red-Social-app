import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//Components
import Header from "../components/Header"

// Pages
import Home from "../pages/Home"
import User from "../pages/User"
import Error404 from "../pages/Error404"

export default function Navigation() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />

                <Route
                    // path={`/:${username}`}
                    path="/:username"
                    element={<User />}
                />

                <Route
                    path='*'
                    element={<Error404 />}
                />
            </Routes>
        </BrowserRouter>
    )
}