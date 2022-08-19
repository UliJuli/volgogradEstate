const React = require('react');

class YandexMapsComponent extends React.PureComponent {
  render() {
    const { isForAdvForm } = this.props;
    return (
      <div className="map-container">
        <div id="map" className="rounded-2" style={{ overflow: 'hidden', width: '100%', height: '800px' }} />
        <script defer src="/js/lib/yMap/yMapLib.js" />
        <script defer src="/js/lib/yMap/yMapInit.js" />
        {isForAdvForm
          && (
            <div>
              <script defer src="/js/lib/yMap/modules/addNewObjsInMap.js" />
              <script defer src="/js/lib/yMap/modules/getObjInMapArea.js" />
              <script defer src="/js/lib/yMap/modules/dynamicBalloonWraper.js" />
              <script defer src="/js/components/PageAdvsYMapHandler.js" />
            </div>
          )}
        {!isForAdvForm
          && (
          <div>
            <script defer src="/js/lib/yMap/modules/addClickEventWithCallBack.js" />
            <script defer src="/js/lib/yMap/modules/addDraggblePointWithCallBack.js" />
            <script defer src="/js/components/PageEditCreateAdvYMapHandler.js" />
          </div>
          )}
      </div>
    );
  }
}

module.exports = YandexMapsComponent;
