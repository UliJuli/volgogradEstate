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
          <p className="category">{category}</p>
          <p className="price">{price}</p>
          <p className="square">{square}</p>
          <a href="#">Подробнее</a>
          <button type="button" className="btn btn-wishes">В избранное</button>
          <a href="#">На карте</a>

          <a href={`/advs/${id}/edit`} className="btn btn-warning d-inline-flex align-items-center">
            <svg className="bi" width="20" height="20"><use xlinkHref="#settings" /></svg><span className="ms-1 d-none d-sm-inline"> Редактировать</span>
          </a>
        </div>
      </div>
    );
  }
}

module.exports = AdvComponent;
