const React = require('react');

class AdvComponent extends React.PureComponent {
  render() {
    const {
      adv: {
        id, title, price, square, createdAt,
      },
      isForClient, wishs,
    } = this.props;
    return (
      <div id={id} className="card text-white card-has-bg click-col" style={{ backgroundImage: "url('https://source.unsplash.com/600x900/?tech,street')" }}>
        <img className="card-img d-none" src="https://source.unsplash.com/600x900/?tech,street" alt="Goverment Lorem Ipsum Sit Amet Consectetur dipisi?" />
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <h4 className="card-title mt-0 "><a className="text-white text-decoration-none" herf="#">{title}</a></h4>
            <small><i className="far fa-clock" /> {createdAt.toString()}</small>
          </div>
          <div className="card-footer">
            <div className="media d-flex flex-row" style={{ gap: '1.5rem' }}>
              <a href="#" type="button" className="btn btn-outline-warning d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#maps" /></svg><span className="ms-1 d-none d-lg-inline"> На карте</span></a>
              <a href="#" type="button" className="btn btn-outline-info d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#moreInfoAdvs" /></svg><span className="ms-1 d-none d-sm-inline"> Подробнее</span></a>
              {wishs?.includes(id)
                ? <button type="button" style={{ marginLeft: 'auto' }} className="btn btn-danger btn-wishes d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#favoriteIcon" /></svg><span className="ms-1 d-none d-sm-inline"> Следить</span></button>
                : <button type="button" style={{ marginLeft: 'auto' }} className="btn btn-outline-danger btn-wishes d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#favoriteIcon" /></svg><span className="ms-1 d-none d-sm-inline"> Следить</span></button>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = AdvComponent;

// <div className="el-container main-container" key={id}>
// <div className="verical-container">
//   <img src="#" alt="photo" />
//   <h6>{title}</h6>
// </div>
// <div className="gorisont-container">
//   <div className="info-group">
//     <p className="price">Цена: {price} ₽ </p>
//     <p className="square">Площадь: {square} кв.м </p>
//   </div>
//   <div className="btn-group">
//     <div className="some-btn">
//       <button type="button" className="btn btn-info d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#moreInfoAdvs" /></svg><span className="ms-1 d-none d-sm-inline"> Подробнее</span></button>
//     </div>
//     <div className="some-btn">
//       {wishs?.includes(id)
//         ? <button id={id} type="button" className="btn btn-success btn-wishes d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#favoriteIcon" /></svg><span className="ms-1 d-none d-sm-inline">Добавлено в избранное</span></button>
//         : <button id={id} type="button" className="btn btn-success btn-wishes d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#favoriteIcon" /></svg><span className="ms-1 d-none d-sm-inline">В избранное</span></button>}
//     </div>
//     <div className="some-btn">
//       <button type="button" className="btn btn-warning d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#maps" /></svg><span className="ms-1 d-none d-sm-inline"> На карте</span></button>
//     </div>
//   </div>
// </div>
// </div>
