async function addDraggblePointWithCallBack(mapObj, _coords, callBack) {
  await mapObj.isInited;

  mapObj.map.geoObjects.removeAll();

  const point = new ymaps.Placemark(_coords, null, { draggable: true });

  point.events.add('dragend', (event) => {
    const coords = event.get('target').geometry.getCoordinates();
    if (callBack) callBack(coords);
  });

  mapObj.map.geoObjects.add(point);

  return mapObj;
}
