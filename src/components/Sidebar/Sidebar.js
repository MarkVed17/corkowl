import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", icon: "/assets/dashboard.svg", url: "/" },
    { name: "Inventory", icon: "/assets/inventory.svg", url: "/inventory" },
    { name: "Orders", icon: "/assets/orders.svg", url: "/orders" },
    { name: "Customers", icon: "/assets/customers.svg", url: "/customers" },
    { name: "Reports", icon: "/assets/reports.svg", url: "/reports" },
    { name: "Settings", icon: "/assets/settings.svg", url: "/settings" },
  ];

  return (
    <aside className="sidebar">
      {sidebarLinks.map(({ url, icon, name }) => (
        <a
          key={name}
          href={url} // href just for static page but would be a React Router <NavLink> after adding react-router
          className={url === "/" ? "sidebar-link-active" : "sidebar-link"}
        >
          <img src={icon} alt={name} />
          <p>{name}</p>
        </a>
      ))}
    </aside>
  );
};

export { Sidebar };
