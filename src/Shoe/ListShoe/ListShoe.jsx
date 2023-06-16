import React, { Component } from "react";
import ItemShoe from "./ItemShoe";
import { connect } from "react-redux";

class ListShoe extends Component {
  render() {
    const { shoeArr} = this.props;
    return (
      <div
        className="d-flex flex-column p-3 border rounded-4"
        style={{ height: "80vh" }}
      >
        <h2 className="mb-5">Danh sách sản phẩm</h2>
        <div className="row row-gap-3 overflow-y-scroll">
          {shoeArr.map((shoe) => {
            return <ItemShoe key={shoe.id} shoe={shoe} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoeArr: state.shoeReducer.shoeArr,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ListShoe);
