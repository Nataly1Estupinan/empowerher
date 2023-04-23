import { Link, Outlet } from "react-router-dom"

const Layout = () => {
    return <div>
        <nav style={navStyle}>
            <ul style={ulStyle}>
                <li style={liStyle}>
                    <Link to="/" style={linkStyle}>
                        Inicio
                    </Link>
                </li>
                <li style={liStyle}>
                    <Link to="/educacion" style={linkStyle}>
                        Educacion
                    </Link>
                </li>
                <li style={liStyle}>
                    <Link to="/transporte" style={linkStyle}>
                        Transporte
                    </Link>
                </li>
            </ul>
        </nav>
        <br />
        <Outlet />
    </div>
}

const navStyle = {
    backgroundColor: "pink",
    display: "flex",
    justifyContent: "center",
  };
  
  const ulStyle = {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    margin: "0",
    padding: "0",
  };
  
  const liStyle = {
    margin: "0 10px",
  };
  
  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
export default Layout;