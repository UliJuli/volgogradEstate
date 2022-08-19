const React = require('react');
const Layout = require('../components/Layout');

module.exports = function AdvsFullPage({ title, adv }) {
  console.log(adv);
  return (
    <Layout title={title}>
      <div className="container" style={{ width: '600px' }}>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            { adv.photo.split(',').map((el, index) => (
              <div className={index ? 'carousel-item active' : 'carousel-item'}>
                <img src={`/img/flats/${el}`} className="d-block w-100" />
              </div>
            )) }
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div>Название: {adv.title}</div>
        <div>Описание: {adv.description}</div>
        <div>Адресс: {adv.addressString}</div>
        <div>Цена: {adv.price}</div>
        <div>Площадь: {adv.square}</div>
        <div>Количество комнат:{adv.roomCount}</div>
      </div>
      <div className="center btn-onFullPage">
        <a href="tel:+1800229933" className="btn btn-primary btn-lg">Позвонить</a>
        <a href="/" className="btn  btn-success btn-lg btn-wishes">В избранное</a>
        <a href="/" className="btn btn-secondary btn-lg">Назад</a>
        <a href="/advs_edit" className="btn  btn-warning btn-lg">Изменить/Создать</a>
      </div>

    </Layout>
  );
};
