import React, { Component } from 'react'
import { connect } from 'react-redux'
import { themGioHangAction } from '../../redux/reducer/gioHangReducer';
 class SanPhamRedux extends Component {
  render() {
    const {sanPham,dispatch} = this.props;

    return (
      <div className='card'>
        <img src= {sanPham.hinhAnh} alt="..." height={350}/>
        <div className="card-body">
          <h3>{sanPham.tenSP}</h3>
          <p>{sanPham.giaBan.toLocaleString()}</p>
          <button className='btn btn-dark'onClick={() => {
            //dua du lieu cua san pham duoc click len redux 
            const action = themGioHangAction({sanPham:sanPham});

            //dua du lieu len redux
            dispatch(action)
          }}>
            Thêm vào giỏ <i className='fa fa-cart-plus'></i>
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(SanPhamRedux)