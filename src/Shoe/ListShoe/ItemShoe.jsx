import React, { Component } from "react";
import { connect } from "react-redux";
import { MUA, XEM_CHI_TIET } from "../../redux/constant/shoeConstant";

class ItemShoe extends Component {
  render() {
    const { shoe, handleChangeDetail, handleAddToCart } = this.props;
    return (
      <div className="col-4 ">
        <div
          className="card p-3 h-100 justify-content-between gap-2"
          style={{ width: "16rem" }}
        >
          <div className="">
            <img src={shoe.image} className="card-img-top" alt="shoe.name" />
            <h5 className="card-title">{shoe.name}</h5>
            <p className="card-text">{shoe.description}</p>
          </div>
          <div className="d-flex gap-2 mt-3">
            <button
              onClick={() => {
                handleChangeDetail(shoe);
              }}
              className="btn btn-primary"
            >
              Xem chi tiết
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                handleAddToCart(shoe);
              }}
            >
              Mua
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeDetail: (shoe) => {
      const action = {
        type: XEM_CHI_TIET,
        payload: shoe,
      };
      dispatch(action);
    },
    handleAddToCart: (shoe) => {
      const action = {
        type: MUA,
        payload: shoe,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemShoe);
