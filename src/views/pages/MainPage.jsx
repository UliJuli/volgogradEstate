/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-comment-textnodes */
const React = require('react');
const Layout = require('../components/Layout');
const FilterForAdvs = require('../components/FilterForAdvs');
const AdvsDrawer = require('../lib/AdvsDrawer');

module.exports = function Main({
  user, advs, wishs, admin, title,
}) {
  return (
    <Layout title={title} user={user} admin={admin}>
      <div className="container">
        <div className="container text-center">
          <div className="row" />
          <div className="row">
            <div className="col-4">
              <FilterForAdvs />
            </div>
            <div className="col-8 advs-container">

              {advs.map((el) => (
                <div className="main-container" key={el.id}>
                  <div className="verical-container">
                    <img src="#" alt="photo" />
                    <h6>{el.title}</h6>
                  </div>
                  <div className="gorisont-container">
                    <p className="category">{el.category}</p>
                    <p className="price">{el.price}</p>
                    <p className="square">{el.square}</p>
                    <a href="#">Подробнее</a>
                    {wishs?.wishlist?.includes(el.id)
                      ? <button name={el.id} type="button" className="btn btn-danger btn-wishes">Добавлено в избранное</button>
                      : <button name={el.id} type="button" className="btn btn-wishes">В избранное</button>}
                    <a href="#">На карте</a>

                  </div>
                </div>
              ))}
            </div>
            <div className="col-8">
              <AdvsDrawer advs={advs} isForClient />
            </div>
          </div>
        </div>
      </div>
      <script src="/js/client.js" />
    </Layout>
  );
};
