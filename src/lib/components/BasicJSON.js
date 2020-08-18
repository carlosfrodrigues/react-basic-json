import React from "react";
import Collapsible from "./Collapsible.js";

function BasicJSON(props){
  var jsonObject;
  if (typeof props.data === 'string'){
    jsonObject = JSON.parse(props.data);
  }else{
    jsonObject = props.data;
  }
    return(
      Object.entries(jsonObject).map((mapValue, index) => {
        return(<div  key = {index}><Collapsible
          prime = {mapValue[0]}
          value = {mapValue[1]}
        /></div>)
      })
    )
}
export default BasicJSON;