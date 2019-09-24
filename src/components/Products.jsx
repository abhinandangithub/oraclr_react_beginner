import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {

    render() {
        return (
            <>
                <h4>Shopping cart</h4>
                <button onClick={this.props.onReset} className="btn btn-danger m-2">Reset</button>
                {this.props.products.map(p => {
                    return <Product onIncrement={this.props.onIncrement} onDelete={this.props.onDelete} key={p.id} product={p} />
                })}
            </>
        );
    }
}

export default Products;