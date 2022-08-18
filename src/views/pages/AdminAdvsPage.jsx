const React = require('react');
const ProfilePageWrapper = require('../components/ProfilePageWrapper');
const FilterForAdvs = require('../components/FilterForAdvs');
const AdvsDrawer = require('../lib/AdvsDrawer');

module.exports = function AdminAdvsPage({
  title, advs, admin, user,
}) {
  return (
    <ProfilePageWrapper title={title} admin={admin} user={user}>
      <div className="container">
        <div className="d-flex flex-column">
          <FilterForAdvs />
          <AdvsDrawer advs={advs} isForClient={false} />
        </div>
      </div>
    </ProfilePageWrapper>
  );
};
