import React, {PropTypes} from 'react';

class ShoesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            shoe: { 
                image: "",
                price: []
            }
        };
        this.onShoeChange = this.onShoeChange.bind(this);
    }
    onShoeChange(event) {
        const shoe = this.state.shoe;
        shoe.price = event.target.value;
        this.setState({shoe: shoe });
    }
    render() {
        return(
        <div>
            <h1>Shoes shows here..</h1>
            <form
                type="text"
                onChange={this.onShoeChange}
                value={this.state.shoe.price} />

        </div>
        );       
    }
}

export default ShoesPage;