import React, { Component } from 'react';
import logo from './logo2.png';
import './App.css';
import './bootstrap.css';
import List from './list';
import items from './shoes';
import './list.css';



const Header = (props) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <img src={logo} className="App-logo" alt="logo" />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <button className="btn btn-primary" onClick={() => props.changePage('cart')}>View Cart</button>
                    <form className="form-inline my-2 my-lg-0">
                        <AddToCart items = {props.item} price = {props.price} />
                    </form>
                </div>
            </nav>
        </div>   
    );      
}

const AddToCart = (props) => {
    return (
      <div className="App">
        <table>
            <tbody className="text-white">
                <tr>
                    <td>No. Items</td>
                    <td>:</td>
                    <td>
                    <strong>{props.items}</strong>
                    </td>
                </tr>
                <tr>
                    <td>Sub Total</td>
                    <td>:</td>
                    <td>
                    <strong>${props.price}</strong>
                    </td>
                </tr>
                </tbody>
        </table>       
      </div>
    )
  }

export default Header;