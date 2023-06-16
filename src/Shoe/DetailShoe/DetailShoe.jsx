import React, { Component } from "react";
import { connect } from "react-redux";

class DetailShoe extends Component {
  render() {
    const { detailShoe } = this.props;

    return (
      <div className="border rounded-4 p-3">
        <h2>Thông tin chi tiết</h2>
        <div>
          <div>
            <span className="fw-bold">Tên: </span>
            <span>{detailShoe.name}</span>
          </div>
          <div>
            <span className="fw-bold">Giá: </span>
            <span>{detailShoe.price}</span>
          </div>
          <div>
            <span className="fw-bold">Mô tả: </span>
            <span>{detailShoe.description}</span>
          </div>
          <div>
            <span className="fw-bold">Mô tả ngắn: </span>
            <span>{detailShoe.shortDescription}</span>
          </div>
          <div>
            <span className="fw-bold">Số Lượng: </span>
            <span>{detailShoe.quantity}</span>
          </div>
          <div>
            <p className="text-center fw-bold">Hình ảnh</p>
            <div style={{ width: "50%" }} className="mx-auto">
              <img
                style={{ width: "100%" }}
                src={detailShoe.image}
                alt={detailShoe.name}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    shoeArr: state.shoeReducer.shoeArr,
    detailShoe: state.shoeReducer.detailShoe,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DetailShoe);
