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
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
              <ProfilePageNav isForClient={isForClient} />
            </div>
            <div className="col py-3">
              {children}
            </div>
          </div>
        </div>
        <script src="/js/client2.js" />
      </Layout>
    );
  }
}

module.exports = ProfilePageWrapper;
