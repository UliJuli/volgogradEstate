const React = require('react');
const Layout = require('../components/Layout');

module.exports = function AdvsFullPage({ title }) {
  return (
    <Layout title={title}>
      <div className="container text-center">
        <div className="row">
          <div className="center">
            <img src="img/1.jpeg" className="rounded center" style={{ maxWidth: '500px' }} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src="img/2.jpeg" className="rounded" style={{ maxWidth: '300px', maxHeight: '200px' }} />
          </div>
          <div className="col">
            <img src="img/3.jpeg" className="rounded" style={{ maxWidth: '300px', maxHeight: '200px' }} />
          </div>
          <div className="col">
            <img src="img/4.jpeg" className="rounded" style={{ maxWidth: '300px', maxHeight: '200px' }} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div><p>Title</p></div>
          <div><p>В тексте любого объявления на продажу квартиры должна быть в обязательном порядке указана вся необходимая информация об объекте: адрес, число комнат, метражи, жилая площадь квартиры (как общая, так и жилая), размер кухни, сведения и санузле, отмечает руководитель департамента городской недвижимости и аренды "НДВ-Недвижимость" Светлана Бирина.</p></div>
        </div>
        <div className="col text-onFullPage">
          <div><p>Price</p></div>
          <div><p>Catagory</p></div>
          <div><p>Square/Room Count</p></div>
        </div>
      </div>
      <div>Extra In FLAT</div>
      <div className="btn-onFullPage">
        <a  className="btn btn-warning btn-wishes btn-lg">To wish List</a>
        <a  className="btn btn-info btn-lg">Call</a>
        <a  className="btn btn-light btn-lg">Back</a>
        <a href="/advs_edit" className="btn btn-dark btn-lg">Edit/New</a>
      </div>
    </Layout>
  );
};
