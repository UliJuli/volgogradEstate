const React = require('react');

class YandexMapsComponent extends React.PureComponent {
  render() {
    return (
      <div className="map-container">
        <div id="map" className="rounded-2" style={{ overflow: 'hidden', width: '100%', height: '800px' }} />
        <script defer src="/js/lib/initYMap.js" />
        <script defer src="/js/lib/yMapHandler.js" />
      </div>
    );
  }
}

module.exports = YandexMapsComponent;
