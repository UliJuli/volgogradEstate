const React = require('react');
const AdminPageDataContainer = require('../components/AdminPageDataContainer');
const FilterForAdvs = require('../components/FilterForAdvs');
const AdvsDrawer = require('../lib/AdvsDrawer');

module.exports = function AdminAdvsPage({ title, rooms }) {
  return (
    <AdminPageDataContainer title={title}>
      <div className="container">
        <div className="d-flex flex-column">
          <FilterForAdvs />
          <AdvsDrawer rooms={rooms} isForClient={false} />
        </div>
      </div>
    </AdminPageDataContainer>
  );
};
