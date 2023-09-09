import React from 'react';
//Custom Components Imports
import Header from './Components/Header';
import Footer from './Components/Footer';
//Bootstrap Components Imports
import { Container } from "react-bootstrap";
import HomeScreen from './Screens/HomeScreen';
//Custom Screens Import

const App = () => {
    return (
        <>
            <Header />
            <main className='py-3'>
                <Container>
                    <HomeScreen />
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default App;