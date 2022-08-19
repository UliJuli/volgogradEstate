yMap.isInited.then(async () => {
  const field = document.getElementById('address-input-coords');

  function writeCoordToField(coords) {
    field.value = coords.map((coord) => Number(coord.toFixed(3))).toString();
  }

  function createNewPointByCoords(coords) {
    addDraggblePointWithCallBack(yMap, coords, writeCoordToField);
    field.value = coords.map((coord) => Number(coord.toFixed(3))).toString();
  }

  addClickEventWithCallBack(yMap, createNewPointByCoords);
  addDraggblePointWithCallBack(yMap, field.value.split(','), writeCoordToField);
});
