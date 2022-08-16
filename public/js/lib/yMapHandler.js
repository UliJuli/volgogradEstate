yMap.isInited.then(() => {
  yMap.addNewObjects([{
    type: 'Point',
    advsId: 1,
    coordinates: [55.73, 37.75],
  }, {
    type: 'Point',
    advsId: 2,
    coordinates: [55.10, 37.45],
  }, {
    type: 'Point',
    advsId: 3,
    coordinates: [55.25, 37.35],
  }, {
    type: 'Point',
    advsId: 4,
    coordinates: [55.25, 67.35],
  }]);
});

setTimeout(() => {
  yMap.isInited.then(() => {
    console.log('added');
    yMap.addNewObjects([{
      type: 'Point',
      _data: 5,
      coordinates: [55.40, 37.75],
    }, {
      type: 'Point',
      advsId: 6,
      coordinates: [55.10, 37.65],
    }, {
      type: 'Point',
      advsId: 7,
      coordinates: [55.25, 37.15],
    }, {
      type: 'Point',
      advsId: 8,
      coordinates: [55.55, 67.35],
    }]);
  });
}, 5000);
