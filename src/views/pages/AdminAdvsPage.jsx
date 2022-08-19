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
        <div className="row flex-column flex-md-row">
          <div style={{ width: '200px' }}>
            <FilterForAdvs />
          </div>
          <div className="col d-flex flex-column advs-container" style={{ gap: '1.5rem' }}>
            <AdvsDrawer admin={admin} advs={advs} user={user} />
          </div>
        </div>
      </div>
    </ProfilePageWrapper>
  );
};
