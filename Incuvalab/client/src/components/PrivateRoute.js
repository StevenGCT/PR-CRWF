import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
    const dataUser = JSON.parse(sessionStorage.getItem('user'));
    const auth = dataUser != null ? false: true;
    return auth ? <Outlet /> : <Navigate to="/" />;
}

export const PrivateRouteAdmin = () => {
    const roleUser = sessionStorage.getItem('role');
    const auth = roleUser == 'Administrador' ? true: false;
    return auth ? <Outlet /> : <Navigate to="/" />;
}
