import React from 'react';
import NavigationBr from '../pages/Shared/NavigationBar/NavigationBr';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <NavigationBr></NavigationBr>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;