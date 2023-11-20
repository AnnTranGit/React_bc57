import React, { Component } from "react";

const arrPhone = [
  {id:1,name:'iphone',price:100,img:'https://picsum.photos/id/1/200/200'},
  {id:2,name:'iphone 15',price:200,img:'https://picsum.photos/id/2/200/200'},
  {id:3,name:'iphone 15 pro',price:300,img:'https://picsum.photos/id/3/200/200'},
]
export default class RenderWithMap extends Component {
  
  renderListPhone = () => {
    let contentJSX = [];
    for (let phone of arrPhone) {
      //Mỗi lần duyệt qua 1 object sẽ tạo ra 1 thẻ jsx li
      let liJSX = <li key={phone.id}>{phone.name}</li>
      //Lấy mảng jsx add liJSX vào
      contentJSX.push(liJSX);
    }
    return contentJSX; // [<li>iphone</li>,<li>iphone 15</li>,<li>iphone 15 pro</li>]
   
  }



  RenderListPhoneWithMap = () => {
    const arrJSX = arrPhone.map ( (phone,index) => {
        return <li key={index}>{phone.name}</li>
    })
    return arrJSX;
  }


  // table

  renderPhoneList =() => {
    const arr = arrPhone.map((phone,index) => {
        return <tr>
            <td>{phone.id}</td>
            <td>{phone.name}</td>
            <td>{phone.price}</td>
            <td><img src={phone.img} alt="" width={50}/></td>
        </tr>
    })
    return arr;

  }

  RenderPhoneCard = () => {
    return arrPhone.map((phone,index) => {
        return <div className="col-4" key={phone.id}>
            <div className="card-body">{phone.id}</div>
            <div className="card-body">{phone.name}</div>
            <div className="card-body">{phone.price}</div>
            <div className="card-body"><img src={phone.img} alt="..." width={50}/></div>

        </div>

    })
  }
//

renderPhoneCard2 = () => {
    return arrPhone.map((phone,index) => {
      return <div className="col-4" key={phone.id}>
          <div className="card">
            <img src={phone.img} alt="..." />
            <div className="card-body">
              <h3>{phone.name}</h3>
              <p>{phone.price}</p>
              <button className="btn btn-dark">Buy</button>
            </div>
          </div>
      </div>
    })
  }


  render() {
    return <div className="container">
        <h3>Demo render list ul li</h3>
        <ul>
          {/* {this.renderListPhone()} */}
         

         {this.RenderListPhoneWithMap()}
         
        </ul>

        <table className="table">
          <thead>
            <tr>
              <tr>id</tr>
              <th>name</th>
              <th>pric</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPhoneList()}
          </tbody>
        </table>


        <h3></h3>
        <div className="row">
            {this.RenderPhoneCard()}
            <br /><br /><br />
            {this.renderPhoneCard2()}

        </div>




    </div>;
  }
}
