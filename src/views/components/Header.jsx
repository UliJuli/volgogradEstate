const React = require('react');

class Header extends React.PureComponent {
  render() {
    const { user, admin } = this.props;
    return (
      <header id="header">
        <nav className="navbar navbar-nav navbar-expand-lg bg-light">
          <div className="container-fluid" style={{ gap: '.8rem' }}>
            <div className="logo-container">
              <img className="logo-img" src="img/IMG_1829.png" alt="" />
            </div>
            <button className="navbar-toggler" style={{ marginLeft: 'auto' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="dropdown ml-auto">
              <a className="nav-link d-flex align-items-center dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <svg className="bi" width="30" height="30"><use xlinkHref="#account" /></svg><span className="ms-1 d-none d-sm-inline"> Аккаунт</span>
              </a>
              <ul className="dropdown-menu" style={{ position: 'absolute', right: '0', left: 'unset' }}>
                {user && (<li><a className="dropdown-item" href="/user/wishlist">Любимое</a></li>)}
                {user && (<li><a className="dropdown-item" href="/user/profile">Личный кабинет</a></li>)}
                {admin && (<li><a className="dropdown-item" href="/admin">Панель управления</a></li>)}
                {(!user && !admin) && (<li><a className="dropdown-item" href="/login">Войти</a></li>)}
                {(user || admin) && (<li><hr className="dropdown-divider" /></li>)}
                {(user || admin) && (<li><a className="dropdown-item" href="/logout">Выйти</a></li>)}
              </ul>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/">Типы жилья</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/adsvOnMap">Найти на карте</a>
                </li>
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
