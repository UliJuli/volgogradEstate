// EVENT ->  all obj in Map area
function getObjInMapArea(mapObj, _callBack) {
  mapObj.map.events.add('boundschange', () => {
    const callBack = _callBack;
    mapObj.visibleObjects = ymaps.geoQuery(mapObj.objectManager.objects).searchIntersect(mapObj.map);
    if (callBack) callBack();
  });
  return mapObj;
}
