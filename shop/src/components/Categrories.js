import React, { Component } from "react";

export class Categrories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categrories: [
        {
          key: "all",
          name: "Всі",
        },

        {
          key: "Шкафи",
          name: "Шкафи",
        },

        {
          key: "Стульчики",
          name: "Стульчики",
        },
      ],
    };
  }
  render() {
    return (
      <div className="categrories">
        {this.state.categrories.map((el) => (
          <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>
            {el.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Categrories;
