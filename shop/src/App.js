import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categrories from "./components/Categrories";
import ShowFullItem from "./components/ShowFullItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: "Шкафчики",
          img: "102.jpg",
          desc: "Прекрасно",
          category: "Шкафи",
          price: "200",
        },
        {
          id: 2,
          title: "Стільчик",
          img: "134.jpg",
          desc: "Прекрасно",
          category: "Стульчики",
          price: "400",
        },
        {
          id: 3,
          title: "Шкафчики",
          img: "102.jpg",
          desc: "Прекрасно",
          category: "Шкафи",
          price: "400",
        },
      ],
      showFullItem: false,
      fullItem: {},
    };
    this.state.currentItems = this.state.items;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  onShowItem(item) {
    this.setState({ fullItem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
  }
  chooseCategory(category) {
    if (category === "all") {
      this.setState({ currentItems: this.state.items });
    } else {
      this.setState({
        currentItems: this.state.items.filter((el) => el.category === category),
      });
    }
  }

  addToOrder(item) {
    const isInArray = this.state.orders.some((el) => el.id === item.id);

    if (!isInArray) {
      this.setState((prevState) => ({
        orders: [...prevState.orders, item],
      }));
    }
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categrories chooseCategory={this.chooseCategory} />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.currentItems}
          onAdd={this.addToOrder}
        />
        {this.state.showFullItem && (
          <ShowFullItem
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
            item={this.state.fullItem}
          />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
