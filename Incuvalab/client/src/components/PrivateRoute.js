import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUsers } from "../context/userContext"
import { useState, useEffect } from 'react'

export const PrivateRoute = () => {
    const dataUser = JSON.parse(localStorage.getItem('user'));
    const auth = dataUser != null ? false: true;
    return auth ? <Outlet /> : <Navigate to="/" />;
}

export const PrivateRouteAdmin = () => {
    const roleUser = localStorage.getItem('role');
    const auth = roleUser == 'Administrador' ? true: false;
    return auth ? <Outlet /> : <Navigate to="/" />;
}
