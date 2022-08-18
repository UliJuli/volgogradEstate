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
              <AdvsDrawer advs={advs} isForClient wishs={wishs} />
            </div>
          </div>
        </div>
      </div>
      <script src="/js/client.js" />
    </Layout>
  );
};
