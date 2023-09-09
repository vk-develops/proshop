import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Custom Components Imports
import Header from './Components/Header';
import Footer from './Components/Footer';
//Bootstrap Components Imports
import { Container } from "react-bootstrap";
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
//Custom Screens Import

const App = () => {
    return (
        <Router>
            <Header />
            <main className='py-3'>
                <Container>
                    <Routes>
                        <Route path='/' Component={HomeScreen} exact />
                        <Route path='/product/:id' Component={ProductScreen} />
                    </Routes>
                </Container>
            </main>
            <Footer />
        </Router>
    );
}

export default App;