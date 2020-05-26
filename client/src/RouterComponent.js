import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from './layouts';
import Dashboard from './routes/Dashboard';
import Orders from './routes/Orders/AddOrders';
import Login from './routes/Login';
import Companies from './routes/Companies/Add';
import OrdersByCompany from './routes/Companies/Orders';
import Users from './routes/Users/Add';
import MyAccount from './routes/Users/MyAccount';

const RoutesComponent = () => (
  <Switch>
    <BrowserRouter>
      <Route
        exact
        path="/"
        component={Login}
      />
      <Route
        exact
        path="/dashboard"
        render={(props) => (
          <Layout>
            <Dashboard {...props} />
          </Layout>
        )}
      />
      <Route
        exact
        path="/companies"
        render={(props) => (
          <Layout>
            <Companies {...props} />
          </Layout>
        )}
      />
      <Route
        exact
        path="/companies/:id/orders"
        render={(props) => (
          <Layout>
            <OrdersByCompany {...props} />
          </Layout>
        )}
      />
      <Route
        exact
        path="/users"
        render={(props) => (
          <Layout>
            <MyAccount {...props} />
          </Layout>
        )}
      />
      <Route
        exact
        path="/users/new"
        render={(props) => (
          <Layout>
            <Users {...props} />
          </Layout>
        )}
      />      
      <Route
        exact
        path="/orders"
        render={(props) => (
          <Layout>
            <Orders {...props} />
          </Layout>
        )}
      />
    </BrowserRouter>
  </Switch>
);

export default RoutesComponent;
