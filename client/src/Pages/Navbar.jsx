const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-body-tertiary text-bg-danger p-3">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          RedBus
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                BUS TICKETS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                BUS HIRE
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MANAGE BOOKING
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Bus Ticket
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Show My Tickets
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Reschedule
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
