import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu } from "antd";

const Layout = () => {
  return (
    <div>
      <Menu mode="horizontal" style={navStyle}>
        <Menu.Item key="inicio" style={menuItemStyle}>
          <Link to="/" style={linkStyle}>
            Inicio
          </Link>
        </Menu.Item>
        <Menu.Item key="educacion" style={menuItemStyle}>
          <Link to="/educacion" style={linkStyle}>
            Educacion
          </Link>
        </Menu.Item>
        <Menu.Item key="transporte" style={menuItemStyle}>
          <Link to="/transporte" style={linkStyle}>
            Transporte
          </Link>
        </Menu.Item>
        <Menu.Item key="acoso" style={menuItemStyle}>
          <Link to="/acoso" style={linkStyle}>
            Acoso sexual
          </Link>
        </Menu.Item>
        <Menu.Item key="derechos" style={menuItemStyle}>
          <Link to="/derechos" style={linkStyle}>
            Derechos laborales
          </Link>
        </Menu.Item>
        <Menu.Item key="apoyo" style={menuItemStyle}>
          <Link to="/apoyo" style={linkStyle}>
            Apoyo emocional
          </Link>
        </Menu.Item>
        <Menu.Item key="red" style={menuItemStyle}>
          <Link to="/red" style={linkStyle}>
            Red de apoyo
          </Link>
        </Menu.Item>
      </Menu>
      <br />
      {/* Renderizar el contenido de la ruta */}
      <Outlet />
    </div>
  );
};

const navStyle = {
  backgroundColor: "pink",
  display: "flex",
  justifyContent: "center",
};

const menuItemStyle = {
  margin: "0",
};

const linkStyle = {
  textDecoration: "none",
  color: "white",
};

export default Layout;
