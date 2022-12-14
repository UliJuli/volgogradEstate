const React = require('react');

class AdvComponent extends React.PureComponent {
  render() {
    const {
      adv: {
        id, title, price, square, createdAt, photo,
      },
      adv, user, wishs, admin,
    } = this.props;
    const photoUrl = `url('/img/flats/${photo.split(',')[0]}')`;
    return (
      <div id={id} className="card text-white card-has-bg click-col" style={{ backgroundImage: photoUrl, backgroundSize: 'cover' }}>
        <div className="card-img-overlay d-flex flex-column">
          <div className="card-body">
            <h4 className="card-title mt-0 ">{adv['Category.name']}</h4>
            <h4 className="card-title mt-0 "><a className="text-white text-decoration-none" herf="#">{title}</a></h4>
            <small><i className="far fa-clock" />от {createdAt.toString().slice(4, 15)}</small>
            <table className="table table-borderless table-sm" style={{ color: 'inherit' }}>
              <tr>
                <td className="p-0">Цена:</td>
                <td className="p-0">{`${price} руб.`}</td>
              </tr>
              <tr>
                <td className="p-0">Площадь:</td>
                <td className="p-0">{`${square} м2.`}</td>
              </tr>
            </table>
          </div>
          <div className="card-footer">
            <div className="media d-flex flex-row" style={{ gap: '1.5rem' }}>
              <a href="/adsvOnMap" type="button" className="btn btn-outline-warning d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#maps" /></svg><span className="ms-1 d-none d-lg-inline"> На карте</span></a>
              <a href={`/flat/${id}`} type="button" className="btn btn-outline-info d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#moreInfoAdvs" /></svg><span className="ms-1 d-none d-sm-inline"> Подробнее</span></a>
              {admin
                && <a href={`/admin/advs/${id}/edit`} type="button" style={{ marginLeft: 'auto' }} className="btn btn-warning d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#settings" /></svg><span className="ms-1 d-none d-sm-inline"> Изменить</span></a>}
              {wishs?.includes(id)
                ? user && <button type="button" style={{ marginLeft: 'auto' }} className="btn btn-danger btn-wishes d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#favoriteIcon" /></svg><span className="ms-1 d-none d-sm-inline"> Следить</span></button>
                : user && <button type="button" style={{ marginLeft: 'auto' }} className="btn btn-outline-danger btn-wishes d-inline-flex align-items-center"><svg className="bi" width="20" height="20"><use xlinkHref="#favoriteIcon" /></svg><span className="ms-1 d-none d-sm-inline"> Следить</span></button>}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = AdvComponent;
