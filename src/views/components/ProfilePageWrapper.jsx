const React = require('react');

const ProfilePageNav = require('./ProfilePageNav');
const Layout = require('./Layout');

class ProfilePageWrapper extends React.PureComponent {
  render() {
    const {
      children, title, admin, user,
    } = this.props;
    const isForClient = !!user;
    return (
      <Layout title={title} admin={admin} user={user}>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <ProfilePageNav isForClient={isForClient} />
            <div className="col py-3">
              {children}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = ProfilePageWrapper;
