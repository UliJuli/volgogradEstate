const React = require('react');
const Layout = require('../components/Layout');
const SearchByAddressComponent = require('../components/SearchByAddressComponent');
const YandexMapsComponent = require('../components/YandexMapsComponent');

module.exports = function AdvsOnMapPage({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <div className="row mb-3"><SearchByAddressComponent /></div>
        <div className="row mb-3" />
        <div className="row"><YandexMapsComponent /></div>
      </div>
    </Layout>
  );
};
