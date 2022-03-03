import React, { ReactElement, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "./Auth";
import Header from "./Header";
import "./Layout.css";

export default function Layout(): ReactElement {
    const auth = useAuth();
    return (
        <div className="layout-container">
            {/* Avatar is a place holder to what in the futer may be a component to show the user data or image */}
            <Header avatar={auth.isLogged() ? auth.user : undefined} className="layout-header" />
            <div className="layout-content">
                <Outlet />
            </div>
        </div>
    );
}
