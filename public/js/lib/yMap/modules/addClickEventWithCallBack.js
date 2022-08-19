async function addClickEventWithCallBack(mapObj, callBack) {
  await mapObj.isInited;

  mapObj.map.events.add('click', (event) => {
    const coords = event.get('coords');
    if (callBack) callBack(coords);
  });

  return mapObj;
}
