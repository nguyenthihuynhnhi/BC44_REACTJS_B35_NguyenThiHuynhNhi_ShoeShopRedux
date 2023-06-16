import React, { Component } from "react";
import ItemCartShoe from "./ItemCartShoe";
import { connect } from "react-redux";

class CartShoe extends Component {
  render() {
    const { cart, handleChangeAmount, handleDelete } = this.props;
    return (
      <div
        className="border rounded-4 p-3 flex-grow-1"
        style={{ height: "37%" }}
      >
        <h2>Giỏ hàng</h2>
        <div className="overflow-auto" style={{ height: "85%" }}>
          {cart.map((shoe) => {
            return <ItemCartShoe key={shoe.id} shoe={shoe} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.shoeReducer.cart,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, null)(CartShoe);
