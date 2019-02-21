import React, { Component } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import ProductTable from "./components/ProductTable";
import datas from "./data.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      productStock: false
    };
  }
  handleSearchBar(e) {
    this.setState({
      search: e.target.value
    });
  }
  handleStockCheck(e) {
    this.setState({
      productStock: e.target.checked
    });
    // console.log(e.target.checked)
  }

  render() {
    let filteredProducts = datas.data.filter(product =>
      product.name.toLowerCase().includes(this.state.search.toLowerCase())
    );
    let filteredStockedProducts = filteredProducts.filter(
      product => product.stocked === true
    );
    console.log(this.state.productStock);
    return (
      <div className="App">
        <h1>IronStore</h1>
        <SearchBar
          search={this.state.search}
          onSearchChange={e => this.handleSearchBar(e)}
          stock={this.state.productStock}
          onCheckChange={e => this.handleStockCheck(e)}
        />
        <ProductTable
          products={
            this.state.productStock ? filteredStockedProducts : filteredProducts
          }
        />
      </div>
    );
  }
}

export default App;
