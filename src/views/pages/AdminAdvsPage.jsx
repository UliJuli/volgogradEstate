const React = require('react');
const AdminPageDataContainer = require('../components/AdminPageDataContainer');
const FilterForAdvs = require('../components/FilterForAdvs');
const AdvsDrawer = require('../lib/AdvsDrawer');

module.exports = function AdminAdvsPage({
  title, advs, admin, user,
}) {
  return (
    <AdminPageDataContainer title={title} admin={admin} user={user}>
      <div className="container">
        <div className="d-flex flex-column">
          <FilterForAdvs />
          <AdvsDrawer advs={advs} isForClient={false} />
        </div>
      </div>
    </AdminPageDataContainer>
  );
};
