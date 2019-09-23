import React, { Component } from 'react';
class Product extends Component {

    state = {
        count: this.props.product.count
    }

    formatCount() {
        if (this.state.count) {
            return this.state.count;
        } else {
            return "Zero";
        }
    }

    handleIncrement = () => {
        const count = this.state.count + 1;
        this.setState({ count });
    }

    render() {
        console.log('renser ', this.props);
        return (
            <div>
                <span className={this.getBadgeClassess()}>{this.formatCount()}</span>
                <span>{this.props.product.name}</span>
                <button onClick={this.handleIncrement} className="btn btn-primary m-2">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.product.id)} className="btn btn-danger m-2">Delete</button>
            </div>
        );
    }

    getBadgeClassess() {
        let classes = "badge m-2 badge-";
        classes += this.state.count ? "primary" : "warning";
        return classes;
    }
}

export default Product;
