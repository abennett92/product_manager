import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import ProductsShow from "./components/ProductsShow";
import ProductsEdit from "./components/ProductsEdit";
import ProductsForm from "./components/ProductsForm";
import ProductsAll from "./components/ProductsAll";

function App() {

  const [submitted, setSubmitted] = useState(false)
  return (
    <BrowserRouter>

      <Route exact path="/">
        <div className="container">
          <h1>Product Manager</h1>
          <ProductsForm submitted={submitted} setSubmitted={setSubmitted}></ProductsForm>
          <ProductsAll submitted={submitted}></ProductsAll>
        </div>
      </Route>

      <Route exact path="/product/:id">
        <ProductsShow></ProductsShow>
      </Route>

      <Route exact path="/product/edit/:id">
        <ProductsEdit></ProductsEdit>
      </Route>

    </BrowserRouter>
  );
}

export default App;
