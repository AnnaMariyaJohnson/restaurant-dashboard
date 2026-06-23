import { NavLink } from "react-router-dom";

const menuItems = [
  { name: "Dashboard", path: "/" },
  { name: "Orders", path: "/orders" },
  { name: "Menu", path: "/menu" },
  { name: "Reviews", path: "/reviews" },
  { name: "Analytics", path: "/analytics" },
  { name: "Restaurant Profile", path: "/profile" },
  { name: "Settings", path: "/settings" },
];

export default function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        background: "#08142b",
        color: "white",
        padding: "20px",
      }}
    >
      <h2>QuickBite</h2>

      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          style={{
            display: "block",
            color: "white",
            textDecoration: "none",
            padding: "12px 0",
          }}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  );
}