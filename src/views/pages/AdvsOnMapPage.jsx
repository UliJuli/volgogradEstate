const React = require('react');
const Layout = require('../components/Layout');

module.exports = function AdvsOnMapPage({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <div className="container text-center">
          <div className="row" />
          <div className="row">
            <div className="col-4">col-4</div>
            <div className="col-8"><div id="map" style={{ width: '100%', height: '800px' }} /></div>
          </div>
        </div>
      </div>
      <script defer src="/js/lib/initYMap.js" />
      <script defer src="/js/lib/yMapHandler.js" />
    </Layout>
  );
};
