import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import UserDashBoard from "./components/UserDashBoardComponent";
import Barbershop from "./components/BarberShopComponent";
import Barbershops from "./components/BarberShopsComponent";
import HomePage from "./components/HomePage"
import ReviewForm from "./components/ReviewFormComponent"
import MyReviews from "./components/Reviews";
import AppForm from "./components/AppFormComponent"
import Footer from "./components/Footer"
import About from "./components/AboutComponent"
// import { authenticate } from "./services/auth";
import { authenticate } from "./store/session";



function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        <Route path="/barbershops/:barbershopId" exact={true}>
          <Barbershop />
        </Route>
        <Route path="/barbershops/search/:city" exact={true}>
          <Barbershops />
        </Route>
        <Route path="/barbers/:id/create-review" exact={true}>
          <ReviewForm />
        </Route>
        <Route path="/appointments/:barbershopId" exact={true}>
          <AppForm />
        </Route>
        <Route path="/reviews/user" exact={true}>
          <MyReviews />
        </Route>
        <Route path="/about" exact={true}>
          <About />
        </Route>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <ProtectedRoute path="/users" exact={true}>
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <UserDashBoard />
        </ProtectedRoute>

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
