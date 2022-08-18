const React = require('react');

class SearchByAddressComponent extends React.PureComponent {
  render() {
    return (
      <div className="input-group">
        <div className="form-floating">
          <input id="search-on-map" name="search" type="text" className="form-control" placeholder="Поиск на карте...." defaultValue="" />
          <label htmlFor="search-on-map">Поиск на карте....</label>
        </div>

        <button id="search-on-map-sbm" type="button" className="btn btn-primary d-flex align-items-center">
          <svg className="bi" width="20" height="20"><use xlinkHref="#search" /></svg><span className="ms-1 d-none d-sm-inline">Начать поиск</span>
        </button>
      </div>
    );
  }
}

module.exports = SearchByAddressComponent;
