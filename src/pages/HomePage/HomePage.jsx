import { useState } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import './HomePage.css';
import Navbar from '../../components/NavBar/NavBar';
import AuthPage from '../../pages/AuthPage/AuthPage';
import ControlledCarousel from '../../components/Carousel/Carousel';
import SaleItems from '../../components/SaleItems/SaleItems';
import Footer from '../../components/Footer/Footer';


export default function HomePage({user, setUser}){
    return (
        <>
        <Navbar className="dark" user={user} setUser={setUser} />
        <Switch>
            <Route path="/login">
                <AuthPage setUser={setUser}/>
            </Route>
            <Redirect to="/" />
        </Switch>
        <ControlledCarousel />
        <SaleItems />
        <Footer />
        </>
    );
}