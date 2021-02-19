import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Login from './Container/Login';
import FrontHome from './Container/Front/Home';
import Registration from './Container/Front/Registration';
import Product from './Container/Appsite/Products';
import AdminLogin from './Container/Admin/AdminLogin';
import AdminHome from './Container/Admin/Adminhome';
import Addproduct from './Container/Admin/AddProduct';
import Addcategories from './Container/Admin/AddCategory';
import AddToCart from './Container/Appsite/AddtoCart';
import Lastpage from './Container/Appsite/LastPage';
import Order from './Container/Appsite/Order';
import Protected from './Component/Protected';
import AddSubCategories from './Container/Admin/AddSubCategory';
import ViewProduct from './Container/Appsite/ViewProduct';
import AdminProtected from './Component/AdminProtected'
import Profile from './Container/Appsite/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          {/* <Route exact path="/" component={FrontHome} /> */}
          <Route exact path="/" component={FrontHome} />
          <Route exact path="/AdminLogin" component={AdminLogin} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Registration" component={Registration} />
          <Protected exact path="/Product" component={Product} />
          <AdminProtected exact path="/AdminHome" component={AdminHome} />
          <AdminProtected exact path="/Addproduct" component={Addproduct} />
          <AdminProtected exact path="/Addcategories" component={Addcategories} />
          <Protected exact path="/AddToCart" component={AddToCart} />
          <Protected exact path="/Lastpage" component={Lastpage} />
          <Protected exact path="/Order" component={Order} />
          <AdminProtected exact path="/AddSubCategories" component={AddSubCategories} />
          <Protected exact path="/ViewProduct" component={ViewProduct} />
          <Protected exact path="/Profile" component={Profile} />




        </Switch>

        {/* <Dashboard/> */}
      </header>
    </div>
  );
}

export default App;
