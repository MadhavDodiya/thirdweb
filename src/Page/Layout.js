import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm">
  <div className="container">
    <a className="navbar-brand p-2" href="#"><img src='img/Logo-96x19.png'/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item p-2 fs-5">
          <Link className="nav-link clr1" to="/">HOME</Link>
        </li>
        <li className="nav-item p-2 fs-5">
          <Link className="nav-link" to="About">ABOUT</Link>
        </li>
        <li className="nav-item p-2 fs-5">
          <Link className="nav-link" to="Service">SERVICE</Link>
        </li>
        <li className="nav-item p-2 fs-5">
          <Link className="nav-link" to="Contact">CONTACT</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Outlet />
    </>
  )
};

export default Layout;