const React = require('react');

class Header extends React.PureComponent {
  render() {
    const { user, admin } = this.props;
    return (
      <header id="header">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid" style={{ gap: '1.5rem' }}>
            <div className="logo-container">
              <img className="logo-img" src="img/IMG_1829.png" alt="" />
            </div>
            <button className="navbar-toggler" style={{ marginLeft: 'auto' }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Объявление</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Типы жилья</a>
                </li>
              </ul>
            </div>
            <div className="dropdown ml-auto">
              <a className="btn d-flex align-items-center dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">
                <svg className="bi" width="20" height="20"><use xlinkHref="#account" /></svg><span className="ms-1 d-none d-sm-inline"> Аккаунт</span>
              </a>
              <ul className="dropdown-menu">
                {user && (<li><a className="dropdown-item" href="/">Любимое</a></li>)}
                {user && (<li><a className="dropdown-item" href="/profile">Личный кабинет</a></li>)}
                {admin && (<li><a className="dropdown-item" href="/admin">Панель управления</a></li>)}
                {!user && (<li><a className="dropdown-item" href="/login">Войти</a></li>)}
                {(user || admin) && (<li><hr className="dropdown-divider" /></li>)}
                {(user || admin) && (<li><a className="dropdown-item" href="/logout">Выйти</a></li>)}
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
