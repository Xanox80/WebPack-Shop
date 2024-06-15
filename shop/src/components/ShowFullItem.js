import React, { Component } from "react";
import { FaAngleDown } from "react-icons/fa";

export class ShowFullItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }

  handleCloseModal = () => {
    this.setState({ isVisible: false });
  };

  render() {
    return (
      <div
        className="full-item"
        style={{ display: this.state.isVisible ? "block" : "none" }}
      >
        <div>
          <FaAngleDown onClick={this.handleCloseModal} />
          <img
            src={"./img/" + this.props.item.img}
            onClick={() => this.props.onShowItem(this.props.item)}
            alt={this.props.item.title}
          />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}$</b>
          <div
            className="add-to-cart"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
