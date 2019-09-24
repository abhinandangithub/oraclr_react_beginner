import React, { Component } from 'react';
class Product extends Component {

    formatCount() {
        if (this.props.product.count) {
            return this.props.product.count;
        } else {
            return "Zero";
        }
    }

    render() {
        console.log('renser ', this.props);
        return (
            <div>
                <span className={this.getBadgeClassess()}>{this.formatCount()}</span>
                <span>{this.props.product.name}</span>
                <button onClick={() => this.props.onIncrement(this.props.product)} className="btn btn-primary m-2">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.product.id)} className="btn btn-danger m-2">Delete</button>
            </div>
        );
    }

    getBadgeClassess() {
        let classes = "badge m-2 badge-";
        classes += this.props.product.count ? "primary" : "warning";
        return classes;
    }
}

export default Product;
