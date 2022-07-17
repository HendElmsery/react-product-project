import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    let {name , price , id,onsale,count} =this.props.ProductInfo
    return (
        
      <div className='bg-white p-3 w-25 m-3 col-md-3 position-relative' >
        <h6>id:{id}</h6>
        <h6>name: {name}</h6>
        <h6>price: {price}</h6>
        <h6>count: {count}</h6>
        {onsale == true?<div className='bg-danger p-1 text-white position-absolute top-0 end-0'>sale</div>:''}

        <button onClick={()=>this.props.counter(this.props.index)} className='btn btn-outline-dark my-2 w-100'>+</button>
      <button onClick={()=>this.props.delete(id)} className='btn btn-outline-danger w-100'>delete</button>
     
      </div>
    )
  }
}
