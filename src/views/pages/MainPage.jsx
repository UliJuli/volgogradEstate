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
        <div className="row flex-column flex-md-row">
          <div style={{ width: '200px' }}>
            <FilterForAdvs />
          </div>
          <div className="col d-flex flex-column advs-container" style={{ gap: '1.5rem' }}>
            <AdvsDrawer advs={advs} admin={admin} user={user} wishs={wishs} />
          </div>
        </div>
      </div>
      <script src="/js/client.js" />
    </Layout>
  );
};
