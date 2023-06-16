import React, { Component } from "react";
import ListShoe from "./ListShoe/ListShoe";
import DetailShoe from "./DetailShoe/DetailShoe";
import CartShoe from "./CartShoe/CartShoe";

export default class Shoe extends Component {
  render() {
    return (
      <div className="container">
        <div className="row py-5">
          <div className="col-8">
            <ListShoe />
          </div>
          <div
            className="col-4 d-flex flex-column gap-2 "
            style={{ height: "80vh" }}
          >
            <DetailShoe />
            <CartShoe />
          </div>
        </div>
      </div>
    );
  }
}
