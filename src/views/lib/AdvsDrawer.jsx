const React = require('react');
const AdvComponent = require('../components/AdvComponent');

class AdvsDrawer extends React.PureComponent {
  render() {
    const { advs, isForClient, wishs } = this.props;
    return (
      advs?.map((adv) => (<AdvComponent adv={adv} isForClient={isForClient} wishs={wishs} />))
    );
  }
}

module.exports = AdvsDrawer;
