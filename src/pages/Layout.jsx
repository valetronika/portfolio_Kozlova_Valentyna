import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import useOnRouteChange  from '../hooks/use-localstorage'

export default function Layout() {

    return (
        <div className="page_container">
            <div className="header_fixator">
                <Header />
            </div>
            {/* <div className="mobile_control"></div> */}

            <main className="main__block">
                <Sidebar />
                <div className="content">
                    <Outlet />
                </div>
            </main>
        </div>
    );
}
