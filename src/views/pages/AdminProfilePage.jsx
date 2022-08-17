const React = require('react');
const AdminPageDataContainer = require('../components/AdminPageDataContainer');
const ProfileForm = require('../components/ProfileForm');

module.exports = function AdminAdvsPage({
  title, profileData, admin, user,
}) {
  return (
    <AdminPageDataContainer title={title} admin={admin} user={user}>
      <div className="container">
        <div className="d-flex flex-column">
          <ProfileForm isForUser={false} profileData={profileData} />
        </div>
      </div>
    </AdminPageDataContainer>
  );
};
