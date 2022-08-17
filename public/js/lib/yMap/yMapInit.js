function initYMap() {
  return new Promise((res) => {
    ymaps.ready(init);
    function init() {
      const myMap = new ymaps.Map('map', {
        center: [55.83, 37.41],
        zoom: 10,
      }, {
        searchControlProvider: 'yandex#search',
      });
      const objectManager = new ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32,
        clusterDisableClickZoom: true,
      });

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
  const callBack = _callBack;
  return async function (objects) {
    await this.isInited;

    const objToAdd = {
      type: 'FeatureCollection',
      features: objects,
    };
    this.objectManager.add(objToAdd);

    this.map.events.add('boundschange', () => {
      this.visibleObjects = ymaps.geoQuery(this.objectManager.objects).searchIntersect(this.map);
      if (callBack) callBack();
    });

    console.log('~ this.objectManager.objects', this.objectManager.objects);
    this.objectManager.objects.events.add('click', async (event) => {
      // checking content in balloonContentBody
      function hasBalloonData(objectId) {
        const { balloonContentBody } = this.objectManager.objects.getById(objectId).properties;
        return balloonContentBody;
      }

      // get Balloon id by event objectId
      // and get balloon obj from objectManager cache
      const id = event.get('objectId');
      const balloon = this.objectManager.objects.getById(id);

      // draw marker for object you alredy saw
      this.objectManager.objects.setObjectOptions(id, { preset: 'islands#yellowIcon' });

      // check did we have info in ballon
      // yes -> show balloon
      if (hasBalloonData.call(this, id)) { this.objectManager.objects.balloon.open(id); return; }

      // no -> load balloon content
      balloon.properties.balloonContentBody = 'Идет загрузка данных...';
      this.objectManager.objects.balloon.open(id);
      const { headerData, bodyData, footerData } = await loadBalloonData(id);
      balloon.properties.balloonContentHeader = headerData;
      balloon.properties.balloonContentBody = bodyData;
      balloon.properties.balloonContentFooter = footerData;
      // -> update balloon info in yndexMap cache
      this.objectManager.objects.balloon.setData(balloon);
    });
  };
}

function callBack() {
  console.log(yMap.visibleObjects);
}

const yMap = { isInited: initYMap(), addNewObjects: addNewObjects(callBack), visibleObjects: [] };
