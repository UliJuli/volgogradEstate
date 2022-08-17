const React = require('react');

class Header extends React.PureComponent {
  render() {
    const { user, admin } = this.props;
    return (
      <header id="header">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <div className="logo-container">
              <img className="logo-img" src="img/IMG_1829.png" alt="" />
            </div>
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Category</a>
                </li>
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Account
                    </button>
                    <ul className="dropdown-menu">
                      {user && (<><li><a className="dropdown-item" href="/wishlist">wishlist</a></li><li><a className="dropdown-item" href="/setting">profile</a></li></>)}
                      {admin && <li><a className="dropdown-item" href="#">advs</a></li>}
                    </ul>
                  </div>
                </li>
                {!user && (
                <li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>
                )}
                {user && (
                <li className="nav-item">
                  <a className="nav-link" href="/logout">Logout</a>
                </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <script defer src="/js/lib/headerHandler.js" />
      </header>
    );
  }
}

module.exports = Header;
