import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
    state = {
        products: [
            { id: 1, name: "Book", count: 10 },
            { id: 2, name: "Pen", count: 0 },
            { id: 3, name: "Computer", count: 20 },
            { id: 4, name: "TV", count: 40 }
        ]
    }

    handleDelete = (id) => {
        console.log('handleDelete ', id);
        this.setState({
            products: this.state.products.filter(p => p.id !== id)
        });
    }

    render() {
        return (
            <>
                <h4>Shopping cart</h4>

                {this.state.products.map(p => {
                    return <Product onDelete={this.handleDelete} key={p.id} product={p} />
                })}
            </>
        );
    }
}

export default Products;