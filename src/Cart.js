import React, { Component } from 'react';
import PropTypes from 'prop-types';
import items from './shoes';
import './list.css';

let findItemById = (id) => {
    const filter = items.filter(item => item.id == id);
    return filter[0];
}

let sumPrices = (ids) => {
    const filteredObjects = ids.map(element => findItemById(element));
    const mappedObjects = filteredObjects.map(element => element.myprice);
    let result = mappedObjects.reduce((accumulator, currenValue) => accumulator + currenValue);
    return result;
}

class CartItem extends Component {
   render() {
       let item = findItemById(this.props.data);
        return (
            <div className="row mb-5">
                <div className="col-3">
                    <img src={item.myimg} width="100px"></img>
                </div>
                <div className="col-3">
                    $ {item.myprice}
                </div>
                <div className="col-3">
                    1 
                </div>
                <div className="col-3">
                    $ {item.myprice}
                </div>
            </div>
        );
   }
} 

const Cart = props => {
    let subtotal = sumPrices(props.mylist);
    let taxes = subtotal * 0.13;
    let total = subtotal + taxes;
    return (
        <div className="cart row mt-5">
          <div className="col-8">
              {props.mylist.map((element, i) =>
                  <CartItem key={i} data={element} />)
              }       
          </div>
          <div className="col-4">
              <div className="row">
              <div className="text-center">
              Summary
              </div>
              </div>
              <hr/>
              <div className="row">
                  <div className="col-8">
                      <div className="row">Subtotal</div>
                      <div className="row">Taxes</div>
                      <div className="row">Total</div>
                  </div>
                  <div className="col-4">
                      <div className="row">
                          $ {subtotal}
                      </div>
                       <div className="row">
                          $ {taxes}
                       </div>
                      <div className="row">
                          $ {total}
                      </div>
                  </div>
              </div>
              <button className="btn btn-warning">Checkout</button>
          </div>
        </div>
      );
} 
export default Cart;
