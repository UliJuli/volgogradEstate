const React = require('react');
const ProfilePageWrapper = require('../components/ProfilePageWrapper');
const ProfileForm = require('../components/ProfileForm');

module.exports = function ProfilePage({
  title, admin, user,
}) {
  const profileData = admin || user;
  return (
    <ProfilePageWrapper title={title} admin={admin} user={user}>
      <div className="container">
        <div className="d-flex flex-column">
          <ProfileForm isForUser={false} profileData={profileData} />
        </div>
      </div>
    </ProfilePageWrapper>
  );
};
