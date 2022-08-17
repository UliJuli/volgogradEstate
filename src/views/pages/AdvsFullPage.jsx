const React = require('react');
const Layout = require('../components/Layout');

module.exports = function AdvsFullPage({ title }) {
  return (
    <Layout title={title}>
      <div className="container text-center">
        <div className="row">
          <div className="center">
            <img src="img/1.jpeg" className="rounded center" style={{ maxWidth: '700px' }} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src="img/2.jpeg" className="rounded" style={{ maxWidth: '300px' }} />
          </div>
          <div className="col">
            <img src="img/3.jpeg" className="rounded" style={{ maxWidth: '300px' }} />
          </div>
          <div className="col">
            <img src="img/4.jpeg" className="rounded" style={{ maxWidth: '300px' }} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col ">
          <div><p>Title</p></div>
          <div><p>В тексте любого объявления на продажу квартиры должна быть в обязательном порядке указана вся необходимая информация об объекте: адрес, число комнат, метражи, жилая площадь квартиры (как общая, так и жилая), размер кухни, сведения и санузле, отмечает руководитель департамента городской недвижимости и аренды "НДВ-Недвижимость" Светлана Бирина.</p></div>
        </div>
        <div className="col">
          <div><p>Price</p></div>
          <div><p>Catagory</p></div>
          <div><p>Square/Room Count</p></div>
        </div>
      </div>
      <div>Extra In FLAT</div>
      <div>
        <div><button className="btn btn-primary btn-wishes">To wish List</button></div>
        <div><button className="btn btn-primary">Call</button></div>
        <div><button className="btn btn-primary">Back</button></div>
        <div><button className="btn btn-primary">Edit</button></div>
      </div>
    </Layout>
  );
};
