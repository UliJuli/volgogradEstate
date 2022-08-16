const React = require('react');
const AdminPageDataContainer = require('../components/AdminPageDataContainer');

module.exports = function AdminAdvsPage({ title }) {
  return (
    <AdminPageDataContainer title={title}>
      <div className="container">
        SomeData -> ALL ADVS with filter ....
      </div>
    </AdminPageDataContainer>
  );
};
