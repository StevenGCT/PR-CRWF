import {HomePage, NotFoundPage} from './pages/home';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from "./pages/login/login";
import Home from './pages/home/home';
import Register from './pages/login/register';
import { PostProvider } from './context/postContext'

function App() {
    return ( 
        <div>
            <PostProvider>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route exact path='/' component={<Home/>} />
                    <Route path='/register' element={<Register />}/>
                    <Route path='/login' element={<Login />} />
                </Routes>
            </PostProvider>
            
        </div>
        );
}
export default App;