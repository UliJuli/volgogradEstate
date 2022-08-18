function initYMap() {
  return new Promise((res) => {
    if (!localStorage.viewedAdvs)localStorage.viewedAdvs = '';
    ymaps.ready(init);
    function init() {
      const searchControl = new ymaps.control.SearchControl({
        options: {
          size: 'small',
          provider: 'yandex#search',
          noPlacemark: true,
          noPopup: true,
        },
      });

      const myMap = new ymaps.Map('map', {
        controls: ['routeButtonControl', searchControl],
        center: [55.83, 37.41],
        zoom: 10,
      }, {
        searchControlProvider: 'yandex#search',
      });
      const objectManager = new ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32,
        // clusterDisableClickZoom: true,   // <- restrict to zoom cluster
        geoObjectOpenBalloonOnClick: false, // <- restrict to open cluster Balloon
        clusterOpenBalloonOnClick: false, // <- restrict to open cluster Balloon
      });

      objectManager.objects.options.set('preset', 'islands#greenDotIcon');
      objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
      myMap.geoObjects.add(objectManager);

      yMap.map = myMap;
      yMap.objectManager = objectManager;
      yMap.searchControl = searchControl;

      res();
    }
  });
}

const yMap = {
  isInited: initYMap(),
  map: undefined,
  objectManager: undefined,
  searchControl: undefined,
  visibleObjects: [],
};
