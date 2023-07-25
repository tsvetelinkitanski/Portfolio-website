import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { useTranslation } from 'react-i18next';

import DrawerAppBar from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import '/App.css'

function App() {
    const { t } = useTranslation();

    return (
        <div className='background-dark'>
            <DrawerAppBar/>
           <Routes>
                <Route path='/' element={<Home/>}/>
                 {/* <Route path="/" element={<Navigate replace to={Paths.HOME} />} /> */}
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
