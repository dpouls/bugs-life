import React from "react";

export default class Item extends React.Component {

  render(){
  return (
    <div className="">
      <input type="checkbox" />
      {this.props.item}
    </div>
  );
}
}


