import React, { Component } from "react";
import { connect } from "react-redux";
import { SO_LUONG, XOA } from "../../redux/constant/shoeConstant";

class ItemCartShoe extends Component {
  createName = (name) => {
    if (name.length > 10) {
      return name.slice(0, 20) + "...";
    }
    return name;
  };

  render() {
    let { shoe, handleChangeAmount, handleDelete } = this.props;

    return (
      <div className="d-flex gap-2 border rounded-2 p-2 ">
        <div className="border rounded-2" style={{ width: "20%" }}>
          <img
            src={shoe.image}
            className=""
            alt={shoe.name}
            style={{ width: "100%" }}
          />
        </div>
        <div style={{ width: "100%" }}>
          <div className="d-flex gap-2 justify-content-between">
            <h5>{this.createName(shoe.name)}</h5>
            <div>
              <span className="">{shoe.price}</span>
              <span> ₫</span>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center justify-content-center gap-2">
              <button
                onClick={() => {
                  handleChangeAmount(shoe, -1);
                }}
                className="btn btn-success"
              >
                <i className="w-5 fa-solid fa-minus" />
              </button>
              <p className="m-0">{shoe.soLuong}</p>
              <button
                onClick={() => {
                  handleChangeAmount(shoe, 1);
                }}
                className="btn btn-success"
              >
                <i className="w-5 fa-solid fa-plus" />
              </button>
            </div>
            <div className="">
              <button
                onClick={() => {
                  handleDelete(shoe);
                }}
                className="btn btn-success"
              >
                Xóa
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (shoe) => {
      const action = {
        type: XOA,
        payload: shoe,
      };
      dispatch(action);
    },

    handleChangeAmount: (shoe, option) => {
      const action = {
        type: SO_LUONG,
        payload: {
          shoe,
          option,
        },
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemCartShoe);
