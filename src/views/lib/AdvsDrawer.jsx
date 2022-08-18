const React = require('react');
const AdvComponent = require('../components/AdvComponent');

class AdvsDrawer extends React.PureComponent {
  render() {
    const { advs, isForClient, wishs } = this.props;
    return (
      <div className="delete-con">
        {advs?.map((adv) => (<AdvComponent adv={adv} isForClient={isForClient} wishs={wishs} />))}
      </div>
    );
  }
}

module.exports = AdvsDrawer;
