import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Auth from './pages/auth/Auth';
import Product from './pages/Product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Orders from './pages/Orders';
import Cart from './pages/Cart';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { Toaster } from "@/components/ui/sonner"
import NotFound from './pages/NotFound';
import Overview from './pages/Overview';
import ExampleFormPage from './pages/Form'

function App() {
    const [loading, setLoading] = useState(true);
    const [cookies] = useCookies(['token']);
    useEffect(() => {
        if (cookies.token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + cookies.token;
        }
        setLoading(false);
    }, [cookies]);
    return (
        loading
            ? <h1>loading</h1> :
            <>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/products' element={<Product />}></Route>
                        <Route path='/products/view' element={<Overview />}></Route>
                        {cookies.token && <>
                            <Route path='/cart' element={<Cart />}></Route>
                            <Route path='/order' element={<Orders />}></Route>
                        </>}
                        <Route path='/*' element={<NotFound />}></Route>
                    </Routes>
                    <Footer />
                </BrowserRouter>
                <Toaster position="bottom-right" richColors />
                <Auth />
            </>
    )
}

export default App;
