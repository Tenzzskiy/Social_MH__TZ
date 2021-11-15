import './App.css';
import Header from "../Header/Header";
import {StepsNavBar} from "../Steps/Steps";
import HowWork from "../HowWork/HowWork";
import Contacts from "../Contacts/Contacts";
import Footer from "../footer/footer";
import React from "react";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (
        <>
            <BrowserRouter >
            <Header/>
            <StepsNavBar stepNumber={1} road='/'/>
            <HowWork />
            <Contacts />
            <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
