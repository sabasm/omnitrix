import React from 'react'

export default function Product(props) {
    return (
        <div className="product dirDown" style={{order:props.order}}>
        <img
          src={props.picSrc}
          alt={props.picAlt}
        ></img>
        <div className="productName center">
        <span>{props.name}</span>
        </div>
      </div>
    )
}
