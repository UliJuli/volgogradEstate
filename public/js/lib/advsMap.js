function init() {
  console.log('first');
  // Creating the map.
  const myMap = new ymaps.Map('map', {
    center: [48.707067, 44.516975],
    zoom: 12,
  });
}
// The ymaps.ready() function will be called when
// all the API components are loaded and the DOM tree is generated.
ymaps.ready(init);

const coords = [
  [56.023, 36.988],
  [56.025, 36.981],
  [56.020, 36.981],
  [56.021, 36.983],
  [56.027, 36.987],
];

const myCollection = new ymaps.GeoObjectCollection();

for (let i = 0; i < coords.length; i++) {
  myCollection.add(new ymaps.Placemark(coords[i]));
}

myMap.geoObjects.add(myCollection);
