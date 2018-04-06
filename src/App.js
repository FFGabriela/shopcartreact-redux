import React, { Component } from 'react';
import logo from './logo2.png';
import './App.css';
import './bootstrap.css';
import List from './list';
import items from './shoes';
import Header from './Header';
import Cart from './Cart';

class App extends Component {
  state = {
    item: 0,
    price: 0,
    show: 'list',
    mycart: [],
  }

  changePage = (page) => {
    this.setState(
      prevState => ({
        show: page
      })
    );
  }
  addCart = (item) => {
    this.setState(
        prevState => ({
        item: prevState.item + 1,
        price: prevState.price + item.myprice,
        mycart: prevState.mycart.concat(item.id),
      })
    );
  }
  changeData = () => {
    switch(this.state.show){
      case 'list': 
        return <List add = {this.addCart}/>
      case 'cart': 
        return <Cart mylist = {this.state.mycart}/>
    }
  }
  render() {
    return (
      <div className="App">
      <Header item = {this.state.item} price = {this.state.price} changePage = {this.changePage}/> 
        { this.changeData() }
      </div>
    );
  }
}

export default App;
