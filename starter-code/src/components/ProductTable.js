import React, { Component } from 'react';

class ProductTable extends Component {
  render() {
    let filteredProducts = this.props.products
    return (
      <div className="ProductTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, i) =>
            <tr key= {i} style={product.stocked ? {color: 'black'}: {color: 'red'}}>
            <td>{product.name}</td>
            <td>{product.price}</td>
          </tr>
          )}
          </tbody>
      </table>
      </div>
    );
  }
}

export default ProductTable;
