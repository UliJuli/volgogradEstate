const React = require('react');
const Layout = require('../components/Layout');
const SearchByAddressComponent = require('../components/SearchByAddressComponent');
const YandexMapsComponent = require('../components/YandexMapsComponent');

module.exports = function AdvsOnMapPage({ title, admin, user }) {
  return (
    <Layout title={title} admin={admin} user={user}>
      <div className="container">
        <div className="row mb-3"><SearchByAddressComponent /></div>
        <div className="row">
          <div className="col-sm-4">col-sm-4</div>
          <div className="col-sm-8">
            <YandexMapsComponent />
          </div>
        </div>
      </div>
    </Layout>
  );
};
