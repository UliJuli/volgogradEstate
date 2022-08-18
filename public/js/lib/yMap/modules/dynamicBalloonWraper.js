function dynamicBalloonWraper(mapObj) {
  mapObj.objectManager.objects.events.add('click', async (event) => {
    // checking content in balloonContentBody
    function hasBalloonData(objectId) {
      const { balloonContentBody } = mapObj.objectManager.objects.getById(objectId).properties;
      return balloonContentBody;
    }

    // get Balloon id by event objectId
    // and get balloon obj from objectManager cache
    const id = event.get('objectId');
    const balloon = mapObj.objectManager.objects.getById(id);

    // draw marker for object you alredy saw
    mapObj.objectManager.objects.setObjectOptions(id, { preset: 'islands#yellowIcon' });

    // check did we have info in ballon
    // yes -> show balloon
    if (hasBalloonData.call(mapObj, id)) { mapObj.objectManager.objects.balloon.open(id); return; }

    // no -> load balloon content
    balloon.properties.balloonContentBody = 'Идет загрузка данных...';
    mapObj.objectManager.objects.balloon.open(id);
    const { headerData, bodyData, footerData } = await loadBalloonData(id);
    balloon.properties.balloonContentHeader = headerData;
    balloon.properties.balloonContentBody = bodyData;
    balloon.properties.balloonContentFooter = footerData;
    // -> update balloon info in yndexMap cache
    mapObj.objectManager.objects.balloon.setData(balloon);
  });
}
