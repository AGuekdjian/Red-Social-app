import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

// Pages
import Home from "../pages/Home"
import User from "../pages/User"
import Error404 from "../pages/Error404"

// Layouts
import LayoutBasic from "../layouts/LayoutBasic";

export default function Navigation() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                    exact={true}
                />

                <Route
                    path='/:username'
                    element={<User />}
                    exact={true}
                />

                <Route
                    path='*'
                    element={<Error404 />}
                    exact={true}
                />
            </Routes>
        </BrowserRouter>
    )
}