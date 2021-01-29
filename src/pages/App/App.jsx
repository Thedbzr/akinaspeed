import { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/login">
              <AuthPage setUser={setUser} />
            </Route>
            <Route exact path="/orders/new">
              <NewOrderPage />
            </Route>
            <Route exact path="/orders">
              <OrderHistoryPage />
            </Route>
            <Redirect to="/" />
          </Switch>
          <Footer />
        </>
      }
    </main>
  );
}
