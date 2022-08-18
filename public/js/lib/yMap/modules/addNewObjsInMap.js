async function addNewObjsInMap(mapObj, objects) {
  await mapObj.isInited;
  const objToAdd = {
    type: 'FeatureCollection',
    features: objects,
  };
  console.log('~ objToAdd', objToAdd);
  console.log('~ mapObj', mapObj);
  mapObj.objectManager.add(objToAdd);
  return mapObj;
}
