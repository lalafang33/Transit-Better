import React from "react";
import './Button.css'

export default function Button(props) {
  return (
    <div className="button" onClick={props.onClick}>{props.text}</div>
  )
}