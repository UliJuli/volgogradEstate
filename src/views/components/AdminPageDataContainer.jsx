const React = require('react');

const AdminPageNavBar = require('./AdminPageNavBar');
const Layout = require('./Layout');

class AdminPageDataContainer extends React.PureComponent {
  render() {
    const { children, title } = this.props;
    return (
      <Layout title={title}>
        <div className="container-fluid">
          <div className="row flex-nowrap">
            <AdminPageNavBar />
            <div className="col py-3">
              {children}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = AdminPageDataContainer;
