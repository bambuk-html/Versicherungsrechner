import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="Tesdpage">Testpage</Link>
          </li>
          <li>
            <Link to="Quadratmeter">Quadratmeter</Link>
          </li>
          <li>
            <Link to="Summe">Versicherungssummenmodell</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
};

export default Layout;
