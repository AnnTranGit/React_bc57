import React, { Component } from 'react'

export default class  extends Component {

    state = {
        person : {
            age:18,
            img: 'https://i.pravatar.cc?u'
        }
    }



  render() {
    return (
      <div className='container'>
        <div className='w-25'>
            <div className='card'>
                <img src={this.state.person.img} alt="..." />
                <div className='card-body'>
                    <h3>Age: {this.state.person.age}</h3>
                    <button className='btn btn-danger' onClick={() => {
                        //tao ra object moi
                        let numRandom = Math.floor(Math.random() * 80 + 18);
                        let newPerson = {
                            img:`https://i.pravatar.cc?u=${numRandom}`,
                            age:numRandom
                        }

                        //setstate > thay the object person trong state vs gia tri moi

                        this.setState({
                            person: newPerson
                        })


                    }}>Random</button>
                </div>

            </div>

        </div>

      </div>
    )
  }
}
