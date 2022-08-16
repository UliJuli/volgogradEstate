function initYMap() {
  return new Promise((res) => {
    ymaps.ready(init);
    function init() {
      const myMap = new ymaps.Map('map', {
        center: [55.76, 37.64],
        zoom: 10,
      }, {
        searchControlProvider: 'yandex#search',
      });
      const objectManager = new ymaps.ObjectManager({
        // Чтобы метки начали кластеризоваться, выставляем опцию.
        clusterize: true,
        // ObjectManager принимает те же опции, что и кластеризатор.
        gridSize: 32,
        clusterDisableClickZoom: true,
      });

      // Чтобы задать опции одиночным объектам и кластерам,
      // обратимся к дочерним коллекциям ObjectManager.
      objectManager.objects.options.set('preset', 'islands#greenDotIcon');
      objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
      myMap.geoObjects.add(objectManager);

      yMap.map = myMap;
      yMap.objectManager = objectManager;
      res();
    }
  });
}

function addNewObjects(_callBack) {
  let eventListnerId;
  const callBack = _callBack;
  const objectsOnMap = []; // <- [1,2,3,4]
  return async function (objects) {
    await this.isInited;
    objectsOnMap.push(...objects);
    const obj = ymaps.geoQuery(objectsOnMap);
    this.map.geoObjects.add(obj.clusterize());

    const eventListner = this.map.events.add('boundschange', () => {
      const visibleObjects = obj.searchInside(this.map);
      this.visibleObjects = visibleObjects;
      if (callBack) callBack();
    });

    if (eventListnerId) eventListner.types.boundschange[eventListnerId] = null;
    eventListnerId = eventListner.types.boundschange.length - 2;
  };
}

function callBack() {
  console.log(yMap.visibleObjects);
}

const yMap = { isInited: initYMap(), addNewObjects: addNewObjects(callBack), visibleObjects: [] };
