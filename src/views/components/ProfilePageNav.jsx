const React = require('react');

class ProfilePageNav extends React.PureComponent {
  render() {
    const { isForClient } = this.props;
    return (
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
        <ul className="navbar navbar-nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
          <li className="nav-item">
            <a href={isForClient ? '/user' : '/admin'} className="nav-link d-flex align-items-center px-0">
              <svg className="bi" width="20" height="20"><use xlinkHref="#home" /></svg><span className="ms-1 d-none d-sm-inline"> Home</span>
            </a>
            {!isForClient && (
            <a href="/admin/advs" className="nav-link d-flex align-items-center px-0">
              <svg className="bi" width="20" height="20"><use xlinkHref="#advs" /></svg><span className="ms-1 d-none d-sm-inline"> Объявления</span>
            </a>
            )}
            <a href={isForClient ? '/user/profile' : '/admin/profile'} className="nav-link d-flex align-items-center px-0">
              <svg className="bi" width="20" height="20"><use xlinkHref="#account" /></svg><span className="ms-1 d-none d-sm-inline"> Профиль</span>
            </a>
            {!isForClient && (
            <a href="/admin/advs/new" className="nav-link d-flex align-items-center px-0">
              <svg className="bi" width="20" height="20"><use xlinkHref="#newAdv" /></svg><span className="ms-1 d-none d-sm-inline"> Нов. объяв.</span>
            </a>
            )}
            {isForClient && (
            <a href="/user/wishlist" className="nav-link d-flex align-items-center px-0">
              <svg className="bi" width="20" height="20"><use xlinkHref="#favoriteIcon" /></svg><span className="ms-1 d-none d-sm-inline"> WishList</span>
            </a>
            )}
          </li>
        </ul>
      </div>
    );
  }
}

module.exports = ProfilePageNav;
