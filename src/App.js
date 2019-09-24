import React from 'react';
import './App.css';
import Products from './components/Products';
import NavBar from './components/NavBar';

class App extends React.Component {

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

  handleReset = () => {
    const products = this.state.products.map(p => { p.count = 0; return p });
    this.setState({ products });
  }

  handleIncrement = (product) => {
    console.log('product ', product);
    const products = [...this.state.products];
    const index = this.state.products.indexOf(product);
    products[index].count++;
    this.setState({ products })
  }

  render() {
    return (
      <div className="App">
        <NavBar count={this.state.products.filter(p => p.count > 0).length} />
        <Products
          products={this.state.products}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onReset={this.handleReset} />
      </div>
    );
  }
}

export default App;
