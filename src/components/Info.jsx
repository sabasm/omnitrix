import React from "react";

export default function Info(props) {
  return (
    <div className="split">
      <div className="infoCenter center">
        <img src= "https://www.health.harvard.edu/media/content/images/p4_HeartMultivitamins_WL1811_gi918436996.jpg" alt="vitamins"/>
      </div>

      <div className="infoCenter center">
        <div className="center" style={{backgroundColor:"peru"}}>
        <h2>some title</h2>
        <p>
          some paragraph ...some paragraph ...some paragraph ...some paragraph
          ...some paragraph ...some paragraph ...some paragraph ...some
          paragraph ...some paragraph ...some paragraph ...some paragraph
          ...some paragraph ...some paragraph ...
        </p>
        </div>
      </div>
    </div>
  );
}
