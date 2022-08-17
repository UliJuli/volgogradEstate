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
      <div className="main-container" key={id}>
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
              <button type="button" className="btn btn-info">Подробнее</button>
            </div>
            <div className="some-btn">
              <button type="button" className="btn btn-success btn-wishes">В избранное</button>
            </div>
            <div className="some-btn">
              <button type="button" className="btn btn-warning">На карте</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = AdvComponent;
