import React, { Component } from 'react'
import { useState } from 'react';
import Child from './Child'


export default class parent extends Component {
    state={
        products:[
            {id: "0",name:"toshiba",price:"1000",onsale:true, count:10},
            {id: "1",name:"sumsung",price:"2900",onsale:false, count:52},
            {id: "2",name:"apple",price:"3000",onsale:true, count:22},
            {id: "3",name:"lenovo c4",price:"8000",onsale:false, count:4},
            {id: "4",name:"xaiome not 10",price:"9500",onsale:true, count:15},
            {id: "5",name:"realme",price:"7000",onsale:true, count:2},
            {id: "6",name:"ATA",price:"1200",onsale:true, count:23},
            {id: "7",name:"LG",price:"20000",onsale:false, count:2},
            {id: "8",name:"toshiba",price:"50000",onsale:true, count:0},
            {id: "9",name:"huawi",price:"1000",onsale:false, count:4},
        ]
    }
    deleteProduct= (id)=>{
       let newProducts =[...this.state.products];
       newProducts = newProducts.filter((product)=> product.id !== id)
       this.setState({products:newProducts})
       
    }
    upadateCounter= (index)=>{
        let products =this.state.products;
       
        products[index].count =  products[index].count +1
        this.setState({products})
    }
  render() {
   
    
    return <>
    <div className="container py-4 bg-dark">
    <div className='bg-dark row'>
        {
            this.state.products.map((product,i)=><Child key={i} 
            index={i}
            delete={this.deleteProduct} 
            counter={this.upadateCounter} 
            ProductInfo ={product} />)
        }
        
            {/* <Child ProductInfo ={this.state.product} /> */}
            
      </div>
      </div>
    </>
      
}
}
