import React from 'react';
import Header from '../../SharedPage/Header/Header';
import Footer from '../../SharedPage/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Main;