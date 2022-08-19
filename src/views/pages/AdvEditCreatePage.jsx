const React = require('react');
const ProfilePageWrapper = require('../components/ProfilePageWrapper');
const AdvEditCreateForm = require('../components/AdvEditCreateForm');

module.exports = function AdvEditCreatePage({
  title, adv, admin, user, isEditForm, allCategories,
}) {
  return (
    <ProfilePageWrapper title={title} admin={admin} user={user}>
      <div className="container">
        <AdvEditCreateForm adv={adv} isEditForm={isEditForm} allCategories={allCategories} />
      </div>
    </ProfilePageWrapper>
  );
};
