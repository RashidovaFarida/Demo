import React, { Component } from 'react';
import ProductItem from './ProductItem';
import products from '../data/ProductData';
import '../sass/style.css';
export class Products extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
        {products.map( (fd,i)=>{
         return <ProductItem photo1={fd.img1} photo2={fd.img1p} title={fd.title} 
         about={fd.about}  price={fd.price} count={i}
         />
        }
        )}
        </div>
        <h1 style={{"color":"red","background":"green"}}></h1>
      </div>
    )
  }
}

export default Products