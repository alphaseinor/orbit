import React, {lazy, Suspense} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import AppShell from './AppShell';
import { AuthProvider } from './context/AuthContext';
import { FetchProvider } from './context/FetchContext';

import PrivateRoute from './util/PrivateRoute'
import AdminRoute from './util/AdminRoute'

import FourOFour from './pages/FourOFour';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';


const Dashboard = lazy(()=> import('./pages/Dashboard'))
const Inventory = lazy(()=> import('./pages/Inventory'))
const Account = lazy(()=> import('./pages/Account'))
const Settings = lazy(()=> import('./pages/Settings'))
const Users = lazy(()=> import('./pages/Users'))

const AppRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
      <PrivateRoute path="/dashboard">
        <AppShell>
          <Dashboard />
        </AppShell>
      </PrivateRoute>
      <AdminRoute path="/inventory">
        <AppShell>
          <Inventory />
        </AppShell>
      </AdminRoute>
      <PrivateRoute path="/account">
        <AppShell>
          <Account />
        </AppShell>
      </PrivateRoute>
      <PrivateRoute path="/settings">
        <AppShell>
          <Settings />
        </AppShell>
      </PrivateRoute>
      <AdminRoute path="/users">
        <AppShell>
          <Users />
        </AppShell>
      </AdminRoute>
      <Route path="*">
        <FourOFour />
      </Route>
    </Switch>
    </Suspense>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <FetchProvider>
          <div className="bg-gray-100">
            <AppRoutes />
          </div>
        </FetchProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
