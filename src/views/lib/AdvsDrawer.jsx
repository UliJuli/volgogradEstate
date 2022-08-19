const React = require('react');
const AdvComponent = require('../components/AdvComponent');

class AdvsDrawer extends React.PureComponent {
  render() {
    const {
      advs, user, wishs, admin,
    } = this.props;
    return (
      advs?.map((adv) => (<AdvComponent adv={adv} admin={admin} user={user} wishs={wishs} />))
    );
  }
}

module.exports = AdvsDrawer;
