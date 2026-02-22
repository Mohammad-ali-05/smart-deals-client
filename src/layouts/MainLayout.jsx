import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
            <header>
                <Navbar></Navbar>
            </header>
            <>
                <Outlet></Outlet>
            </>
            <Footer></Footer>
        </>
    );
};

export default MainLayout;