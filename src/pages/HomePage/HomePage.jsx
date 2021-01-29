import { useState } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import './HomePage.css';
import Navbar from '../../components/NavBar/NavBar';
import AuthPage from '../../pages/AuthPage/AuthPage';
import ControlledCarousel from '../../components/Carousel/Carousel';
import SaleItems from '../../components/SaleItems/SaleItems';


export default function HomePage({user, setUser}){
    return (
        <>
        <ControlledCarousel />
        <SaleItems />
        </>
    );
}