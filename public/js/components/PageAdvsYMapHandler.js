function parseAdvData(adv, isInHistory) {
  const { id, addressCoords } = adv;
  const res = {
    type: 'Feature',
    id,
    geometry: { type: 'Point', coordinates: addressCoords.split(',') },
    properties: {
      // hintContent: '<strong>Текст  <s>подсказки</s></strong>',
    },
    options: {
      preset: 'islands#yellowIcon',
      id,
    },
  };
  if (!isInHistory) delete res.options.preset;
  return res;
}

async function getAdvsCoords() {
  const req = await fetch('/adsvOnMap', {
    method: 'POST',
  });
  if (req.status !== 200) {
    ErrorsHandler();
    return;
  }
  const rawData = await req.json();
  const parsedData = rawData.map((adv) => parseAdvData(adv, checkAdvForCookies(adv)));
  return parsedData;
}

yMap.isInited.then(async () => {
  const advsCoords = await getAdvsCoords();

  addNewObjsInMap(yMap, advsCoords);
  getObjInMapArea(yMap, AdvsDrawer);
  dynamicBalloonWraper(yMap);

  const srchOnMapInp = document.getElementById('search-on-map');
  const srchOnMapBtn = document.getElementById('search-on-map-sbm');

  srchOnMapBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const search = yMap.searchControl.search(srchOnMapInp.value);
    // search.then(() => { yMap.searchControl.clear(); });
  });
});
