import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router';

import { useTranslation } from 'react-i18next';

import DrawerAppBar from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


function App() {
    const { t } = useTranslation();

    return (
        <div>
            <DrawerAppBar/>
           <Routes>
                <Route path='/Home' element={<Home/>}/>
                <Route path='/Projects' element={<Projects/>}/>
                <Route path='/Contact' element={<Contact/>}/>
                 {/* <Route path="/" element={<Navigate replace to={Paths.HOME} />} /> */}
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
