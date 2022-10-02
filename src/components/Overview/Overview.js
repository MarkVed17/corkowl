import React from "react";
import { InventoryTable } from "../InventoryTable/InventoryTable";
import { SalesChart } from "../SalesChart/SalesChart";
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
          <img src="/assets/add_button.svg" alt="add-button" />
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
        <div className="row chart-container">
          <p className="chart-container__heading">Sales Detail</p>
          <div className="chart-container_wrapper">
            <div className="chart-container__top">
              <div className="chart-type">
                <p className="chart-name">Total Sales Overview</p>
                <p className="chart-timeline">7 - 13 Aug, 2020</p>
              </div>
              <div className="chart-actions">
                <div className="refresh-chart">
                  <img src="/assets/refresh.svg" alt="refresh" />
                  <p className="chart-refresh">Refresh Metrics</p>
                </div>
                <div className="filter-options">
                  <p className="filter-by">Filter by</p>
                  <span className="break">|</span>
                  <p className="filter-type">This week</p>
                  <img src="/assets/filter_dropdown.svg" alt="arrow-down" />
                </div>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                <div className="col-8">
                  <div className="chart-figures">
                    <div>
                      <div className="chart-sales-number">$74,729.00</div>
                      <div className="chart-sales-performance">
                        <img src="/assets/performance.svg" alt="performance" />
                        <span>+21% from last week</span>
                      </div>
                    </div>
                    <div className="chart-sales-results">
                      <img src="/assets/growth.svg" alt="growth" />
                      <p className="chart-sales-highlights">
                        Highest revenue since 2 weeks ago
                      </p>
                    </div>
                  </div>
                  <SalesChart />
                </div>
                <div className="col-4 chart-profit-container">
                  <div className="chart-profit-wrapper">
                    <div className="chart-profit-heading">Total Profit</div>
                    <div>
                      <div className="chart-profit-value">$12,545.00</div>
                      <div className="chart-profit-performance">
                        <img src="/assets/performance.svg" alt="performance" />
                        <span>+23% from last week</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="total-products-sold">
                      Total Products Sold
                    </div>
                    <div className="total-sold-products-count">329</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row table-container">
          <p className="table-container__heading">Inventory</p>
          <InventoryTable />
        </div>
      </div>
    </div>
  );
};

export { Overview };
