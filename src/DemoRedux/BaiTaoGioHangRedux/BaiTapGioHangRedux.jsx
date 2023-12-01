/**
 * Sau khi redux thi se xoa 
 * 1/ export tren class
 * 2/ mapDispatchToProps duoi ham mapStateToProps
 * 3/ xoa mapdispatchtoProps trong connect
 * 
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import GioHangRedux from './GioHangRedux'

class BaiTapGioHangRedux extends Component {
  render() {
    return (
      <div className='container'>

        <GioHangRedux/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})


export default connect(mapStateToProps)(BaiTapGioHangRedux)