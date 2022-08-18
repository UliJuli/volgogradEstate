const React = require('react');

class AdvComponent extends React.PureComponent {
  render() {
    const {
      adv: {
        id, title, category, price, square,
      },
      isForClient,
    } = this.props;
    return (
      <div className="el-container" key={id}>
        <div className="verical-container">
          <img src="#" alt="photo" />
          <h6>{title}</h6>
        </div>
        <div className="gorisont-container">
          <div className="info-group">
            <p className="price">Цена: {price} ₽ </p>
            <p className="square">Площадь: {square} кв.м </p>
          </div>
          <div className="btn-group">
            <div className="some-btn">
              <button type="button" className="btn btn-info d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#moreInfoAdvs" /></svg><span className="ms-1 d-none d-sm-inline"> Подробнее</span></button>
            </div>
            <div className="some-btn">
              <button type="button" className="btn btn-success btn-wishes d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#favoriteIcon" /></svg><span className="ms-1 d-none d-sm-inline"> Подробнее</span></button>
            </div>
            <div className="some-btn">
              <button type="button" className="btn btn-warning d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#maps" /></svg><span className="ms-1 d-none d-sm-inline"> На карте</span></button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = AdvComponent;
