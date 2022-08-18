const React = require('react');
const ProfilePageWrapper = require('../components/ProfilePageWrapper');
const AdvsDrawer = require('../lib/AdvsDrawer');

module.exports = function WishListPage({
  title, advs, admin, user, wishs
}) {
  return (
    <ProfilePageWrapper title={title} admin={admin} user={user}>
      <div className="container">
        <div className="d-flex flex-column">
          <AdvsDrawer advs={advs} wishs={wishs} isForClient />
        </div>
      </div>
    </ProfilePageWrapper>
  );
};
