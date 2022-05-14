import {HomePage} from './pages/home/HomePage';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from "./pages/login/login";
import Register from './pages/login/register';
import { PostProvider } from './context/postContext'

function App() {
    return (
        <div>
            <PostProvider>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path='/register' element={<Register />}/>
                    <Route path='/login' element={<Login/>} />
                </Routes>
            </PostProvider>
        </div>
    );
}
export default App;