const React = require('react');

class AdminPageNavBar extends React.PureComponent {
  render() {
    return (
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
          <ul className="navbar navbar-nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li className="nav-item">
              <a href="#" className="nav-link d-flex align-items-center px-0">
                <svg className="bi" width="20" height="20"><use xlinkHref="#home" /></svg><span className="ms-1 d-none d-sm-inline"> Home</span>
              </a>
              <a href="#" className="nav-link d-flex align-items-center px-0">
                <svg className="bi" width="20" height="20"><use xlinkHref="#advs" /></svg><span className="ms-1 d-none d-sm-inline"> Объявления</span>
              </a>
              <a href="#" className="nav-link d-flex align-items-center px-0">
                <svg className="bi" width="20" height="20"><use xlinkHref="#account" /></svg><span className="ms-1 d-none d-sm-inline"> Профиль</span>
              </a>
              <a href="#" className="nav-link d-flex align-items-center px-0">
                <svg className="bi" width="20" height="20"><use xlinkHref="#newAdv" /></svg><span className="ms-1 d-none d-sm-inline"> Новое объявление</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

module.exports = AdminPageNavBar;
