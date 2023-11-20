import React, { Component } from 'react'
import ProductForm from './ProductForm'

export default class ReactForm extends Component {



  render() {
    return (
      <div className='container'>
        <h3> Product Management </h3>
        <ProductForm/>

        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Img</th>
                    <th>Price</th>
                    <th>Type</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
      </div>
    )
  }
}
