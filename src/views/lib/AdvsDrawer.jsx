const React = require('react');
const AdvComponent = require('../components/AdvComponent');

class AdvsDrawer extends React.PureComponent {
  render() {
    const { advs, user, wishs } = this.props;
    return (
      advs?.map((adv) => (<AdvComponent adv={adv} user={user} wishs={wishs} />))
    );
  }
}

module.exports = AdvsDrawer;
