import React,{ Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';
import CategoryPage from './component/CategoryPage';
import HomeItemList from './component/HomeItemList';
import ItemPage from './component/ItemPage';
import Navbar from './component/Navbar';

class App extends Component {

  render() {
    return (
      <div className="App container-fluid p-0">
        <Navbar/>
        <Switch>
          <Route exact path="/home"> <HomeItemList/> </Route>
          <Route exact path="/category"> <CategoryPage/> </Route>
          <Route exact path="/item"> <ItemPage/> </Route>
          <Redirect exact from="/" to="/item" />
        </Switch>
      </div>
    );
  }
}

export default App;
