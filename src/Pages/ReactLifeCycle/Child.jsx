import React, { Component, PureComponent } from 'react'


/**
 PureComponent giống hệt component tuy nhiên không lifecycle vì pure sẽ xử lý ngầm để nhận dạng props component có thay đổi hay không

 Nhận biết sự thay đổi prop trên primitive value (boolen, string, number,undefined,null)

 Nếu prop là reference value(object/array) thì khi handle setState ở component cha thì nhớ clone ra {...} hoặc [...] hoặc dùng cloneDeep của lodash
 */

export default class Child extends PureComponent {
    constructor (props){
        super(props);
        this.state ={

        }
        console.log('constructor child');
    }

    static getDerivedStateFromProps(newProps,currentState) {
        console.log('getDerivedStateFromProps child');
        return null
    }
    
    /*
    shouldComponentUpdate(newProps,newState) {
        //can thiệp vào should update để biết là bấm nút number thì không redner lại, còn bấm nut like phải render lại
        //newProps: là prop sau khi thay đổi trước khi render
        //newState: là state sau khi thay đổi trước khi render

        if (newProps.like !== this.props.like) {
            return true
        }
        console.log('shouldComponentUpdate child')
        return true;
    }
    */



  render() {
    console.log('render child');

    return (
      <div className='bg-dark text-white text-center py-3'>
        Like: {this.props.likeObject.like}
      </div>
    )
  }

  componentDidMount() {
    console.log("componentDidMount child");

  }

  componentDidUpdate (prevProps,prevState) {
    console.log('componentDidUpdate child');
  }

}
