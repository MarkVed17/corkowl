import React from "react";
import { InventoryTable } from "../InventoryTable/InventoryTable";
import "./Overview.css";

const Overview = () => {
  const ordersStatus = [
    { title: "Open orders", icon: "/assets/open_orders.svg", count: 239 },
    {
      title: "Orders in transit",
      icon: "/assets/orders_in_transit.svg",
      count: 126,
    },
    {
      title: "Fulfilled orders",
      icon: "/assets/fulfilled_orders.svg",
      count: 1254,
    },
    {
      title: "Cancelled orders",
      icon: "/assets/cancelled_orders.svg",
      count: 35,
    },
  ];

  const returnBorder = (title) => {
    switch (title) {
      case "Open orders":
        return `col-3 order-status-box border-yellow`;
      case "Orders in transit":
        return `col-3 order-status-box border-blue`;
      case "Fulfilled orders":
        return `col-3 order-status-box border-green`;
      case "Cancelled orders":
        return `col-3 order-status-box border-red`;
      default:
        return `col-3 order-status-box`;
    }
  };

  return (
    <div className="overview-container">
      <div className="overview-top">
        <p className="overview-top__heading">Overview</p>
        <button className="secondary-button">
          <img src="/assets/add_button.svg" alt="" />
          <span>ADD NEW WINE</span>
        </button>
      </div>
      <div className="container-fluid orders-wrapper">
        <div className="row orders-status-container">
          {ordersStatus.map(({ title, icon, count }) => (
            <div key={title} className={returnBorder(title)}>
              <div className="order-status-box__top">
                <p className="order-status-box__title">{title}</p>
                <img src={icon} alt={title} />
              </div>
              <p className="order-status-box__count">{count}</p>
            </div>
          ))}
        </div>
        <div className="row">
          <InventoryTable />
        </div>
      </div>
    </div>
  );
};

export { Overview };
