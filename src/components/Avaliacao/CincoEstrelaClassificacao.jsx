//import { Rating } from "@mui/material";
import React from "react";
import { Rating } from "react-simple-star-rating";


function CincoEstrelaClassificacao({like,deslike}) {
  
  return (
    <Rating
      readonly={true}
      
      initialValue={
        (like / (like + deslike)) *
        5
      }
      emptyColor="transparent"
      allowFraction={true}
      size={23}
      SVGstrokeColor="#faaf00"
      SVGstorkeWidth={1}
    />
  );
}

export default CincoEstrelaClassificacao;
