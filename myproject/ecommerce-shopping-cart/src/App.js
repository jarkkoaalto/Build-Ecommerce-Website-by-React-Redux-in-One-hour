import React from 'react';
import logo from './logo.svg';
import './App.css';
import Products from './components/Products';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {products:[], filterPorducts:[]};
  }
  componentWillMount(){
    fetch("http://localhost:800/products").then(res => res.json())
    .then(data => this.setState({
      products: data,
      filterPorducts: data
    }));
  }

  render() {
    return (
      <div className="container">
        <h1>Ecommerence Shopping Cart Application</h1>
        <hr/>

      <div className="row">
        <div className="col-md-8">
          <Products products={this.state.filterPorducts} handleAddToCart={this.handleAddToCart} />
        </div>
      </div>
      
      </div>
    );
  }
}

export default App;
