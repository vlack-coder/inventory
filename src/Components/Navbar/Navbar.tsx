import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  let activeStyle: React.CSSProperties = {
    fontWeight: "bold",
  };
  let notActiveStyle = {
    textDecoration: "none",
  };
  const types = useSelector((state: any) => state.type.types);
  return (
    <nav>
      <ul>
        <li style={{ fontWeight: "bold", fontSize: "16px" }}>Objector</li>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            all
          </NavLink>
        </li>

    
        {Object.keys(types)
          .map((e) => {
            return { value: types[e][0].value, id: e };
          })
          .map(({ value, id }: any) => (
            <li key={id}>
              <NavLink
                to={`types/${id}`}
                // to="ss"
                style={({ isActive }) =>
                  isActive ? activeStyle : notActiveStyle
                }
              >
                {value}
              </NavLink>
            </li>
          ))}

        <li>
          <NavLink
            to="mtypes"
            style={({ isActive }) => (isActive ? activeStyle : notActiveStyle)}
          >
            Manage types
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
