const React = require('react');
const AdminPageDataContainer = require('../components/AdminPageDataContainer');
const ProfileForm = require('../components/ProfileForm');

module.exports = function AdminAdvsPage({ title, profileData }) {
  return (
    <AdminPageDataContainer title={title}>
      <div className="container">
        <div className="d-flex flex-column">
          <ProfileForm isForUser={false} profileData={profileData} />
        </div>
      </div>
    </AdminPageDataContainer>
  );
};
