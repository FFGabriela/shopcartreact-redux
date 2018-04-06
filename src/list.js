import React, { Component } from 'react';
import PropTypes from 'prop-types';
import items from './shoes';
import './list.css';

const ItemShoes = props => (
  <div className="jumbotron">
    <img className="image img-thumbnail" alt="" src={props.data.myimg} />
    <h5 className="text-muted">
        ${props.data.myprice}
    </h5><br />
    <button
      type="button"
      className="btn btn-warning"
      data-toggle="popover"
      onClick={() =>
            props.add(props.data)}
    >
            Add
    </button>
  </div>
);

const List = props => (
  <div>
    {items.map((element, i) =>
     <ItemShoes key={i} data={element} add={props.add} />)
    }
  </div>
);

export default List;
