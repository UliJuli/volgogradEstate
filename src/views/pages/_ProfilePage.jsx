const React = require('react');

const Layout = require('../components/Layout');

module.exports = function ProfilePage({ advs, user, admin }) {
  return (
    <Layout user={user} admin={admin}>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
          <a href="/" className="navbar-brand d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
            <span className="fs-5 d-none d-sm-inline">Администрирование</span>
          </a>
          <ul className="navbar navbar-nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li className="nav-item">
              <a href="/setting" className="nav-link align-middle px-0">
                <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline">Setting</span>
              </a>
            </li>
            <li>
              <a href="/wishlist" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-table" /> <span className="ms-1 d-none d-sm-inline">Wishlist</span>
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-people" /> <span className="ms-1 d-none d-sm-inline">History</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wishlist-container">
        {advs.map((adv) => (
          <ul className="entries-list no-bullets no-padding wish-ul">
            <li className="entry-item pad-b-4" key={adv.id}>
              <img src={adv.photo} alt="" />
              <h3>{adv.title}</h3>
              <div>
                <span>{adv['Category.name']}</span>
                <span>{adv.price}</span>
                <span>{adv.square}/{adv.roomCount}</span>
              </div>
              <a href={`/advs/${adv.id}`} className="entry-title font-2 pad-b-1-4 c-white">More info</a>
              <button type="button" name={adv['Wishlists.id']} className="entry-title font-2 pad-b-1-4 c-white">remove from wishlist</button>
              <a id={adv.id} href="/map" className="entry-title font-2 pad-b-1-4 c-white">on map</a>
            </li>
          </ul>
        ))}
      </div>
      <script src="/js/client2.js" />
    </Layout>
  );
};
