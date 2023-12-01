import React, { Component } from 'react'
import ProductForm from './ProductForm'

export default class ReactForm extends Component {

  state = {
    arrProduct: [
      {id:1, name: 'iPhone', price:1000, img:'https://picsum.photos/id/1/200/200', type:'phone',description:'iPhone 9'},
      {id:2, name: 'iPhone XS', price:2000, img:'https://picsum.photos/id/2/200/200', type:'phone',description:'iPhone XS'}
    ],

    productEdit : {
      id: '',
      name: '',
      price:'',
      img:'',
      type:'',
      description:''
    }
  }

  addProduct = (newProduct) => {
    this.state.arrProduct.push(newProduct)
    //setState
    this.setState ({
      arrProduct:this.state.arrProduct
    })
  }


  updateProduct = (prodUpdate) => {
    //Tìm ra product có id = product update lấy ra thay đổi
    let prod = this.state.arrProduct.find(pro => pro.id === prodUpdate.id);
    if (prod) {
      for (let key in prod) {
       prod[key] = prodUpdate[key]
      }
    }
    
    //Gọi hàm setstate render lại giao diện 

    this.setState({
      arrProduct : this.state.arrProduct
    })
  }


  deleteProduct = (idProduct) => {
    this.state.arrProduct = this.state.arrProduct.filter(prod => prod.id !== idProduct)

    this.setState ({
      arrProduct: this.state.arrProduct
    })
  }


  editProduct = (prodClick) => {
    this.setState ({
      productEdit:prodClick
    })
  }

  render() {
    return (
      <div className='container'>
        <h3> Product Management </h3>
        <ProductForm updateProduct={this.updateProduct} productEdit = {this.state.productEdit} addProduct = {this.addProduct}/>

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
            <tbody>
              {this.state.arrProduct.map((prod) => {
                return <tr>
                  <td>{prod.id}</td>
                  <td>{prod.name}</td>
                  <td><img src={prod.img} alt="..." width={50} height={50} /></td>
                  <td>{prod.price}</td>
                  <td>{prod.type}</td>
                  <td>{prod.description}</td>
                  <td>
                    <button onClick={() => {this.deleteProduct(prod.id)}} className='btn btn-danger'><i className='fa fa-close'></i></button>
                    <button onClick={() => {this.editProduct(prod)}} className='btn btn-primary mx-2'><i className='fa fa-edit'></i></button>
                  </td>

                </tr>
              })}
            </tbody>
        </table>
      </div>
    )
  }
}
