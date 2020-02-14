import React from "react";
import Product from "./Product";

export default function OurProducts() {
  return (
    <div className="innerContainer dirDown">
      <h2>Nuestros productos</h2>
      <div className="split products" style={{padding:0}}>
       <Product name="vitamina A" order="1" picAlt="Vitamina_A" picSrc="https://cdn.shopify.com/s/files/1/2513/6832/products/VitaminC1000Mg90.jpg?v=1515764523"/>
       <Product name="vitamina C" order="1" picAlt="Vitamina_C" picSrc="https://cdn.shopify.com/s/files/1/2513/6832/products/VitaminC1000Mg90.jpg?v=1515764523"/>
       <Product name="Awitamina x" order="2" picAlt="Awitamina_x" picSrc="https://cdn.shopify.com/s/files/1/2513/6832/products/VitaminC1000Mg90.jpg?v=1515764523"/>
       <Product name="vitamina W" order="2" picAlt="Vitamina_W" picSrc="https://cdn.shopify.com/s/files/1/2513/6832/products/VitaminC1000Mg90.jpg?v=1515764523"/>
      </div>
    </div>
  );
}
