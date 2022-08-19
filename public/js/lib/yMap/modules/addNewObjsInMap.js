async function addNewObjsInMap(mapObj, objects) {
  await mapObj.isInited;
  const objToAdd = {
    type: 'FeatureCollection',
    features: objects,
  };
  mapObj.objectManager.add(objToAdd);
  return mapObj;
}
