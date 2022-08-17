const React = require('react');
const AdvComponent = require('../components/AdvComponent');

class AdminPageNavBar extends React.PureComponent {
  render() {
    const { advs } = this.props;
    return (
      <div>
        {advs?.map((adv) => (<AdvComponent adv={adv} />))}
      </div>
    );
  }
}

module.exports = AdminPageNavBar;
