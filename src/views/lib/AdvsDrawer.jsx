const React = require('react');
const AdvComponent = require('../components/AdvComponent');

class AdminPageNavBar extends React.PureComponent {
  render() {
    const { advs, isForClient } = this.props;
    return (
      <div>
        {advs?.map((adv) => (<AdvComponent adv={adv} isForClient={isForClient} />))}
      </div>
    );
  }
}

module.exports = AdminPageNavBar;
