yMap.isInited.then(() => {
  yMap.addNewObjects([
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          31.26335,
          58.53901,
        ],
      },
      properties: {
        balloonContent: 'Центр выдачи в Великом Новгороде Адрес: г.Великий Новгород, ул. Большая Санкт-Петербургская, д.39 стр 14, оф.1, СДЭК. Тел. (8162) 22-44-40 Заказ будет доставлен в пункт выдачи через 2-4 рабочих дня. Время работы: с понедельника по пятницу с 9-00 до 18-00.',
        hintContent: 'Центр выдачи в Великом Новгороде',
      },
      options: {
        preset: 'islands#violetDotIcon',
      },
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [
          33.0865,
          68.97468,
        ],
      },
      properties: {
        balloonContent: 'Центр выдачи в Мурманске Адрес: г.Мурманск, ул. Володарского, д. 7, СДЭК. тел. (8152)701-781, 701-957 Заказ будет доставлен в пункт выдачи через 3-5 рабочих дня. Время работы: с понедельника по пятницу с 9-00 до 18-00.',
        hintContent: 'Центр выдачи в Мурманске',
      },
      options: {
        preset: 'islands#violetDotIcon',
      },
    },
  ]);
});

setTimeout(() => {
  console.log('first');
  yMap.isInited.then(() => {
    yMap.addNewObjects([
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            31.26340,
            58.53901,
          ],
        },
        properties: {
          balloonContent: 'Центр выдачи в Великом Новгороде Адрес: г.Великий Новгород, ул. Большая Санкт-Петербургская, д.39 стр 14, оф.1, СДЭК. Тел. (8162) 22-44-40 Заказ будет доставлен в пункт выдачи через 2-4 рабочих дня. Время работы: с понедельника по пятницу с 9-00 до 18-00.',
          hintContent: 'Центр выдачи в Великом Новгороде',
        },
        options: {
          preset: 'islands#violetDotIcon',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            33.0885,
            68.97468,
          ],
        },
        properties: {
          balloonContent: 'Центр выдачи в Мурманске Адрес: г.Мурманск, ул. Володарского, д. 7, СДЭК. тел. (8152)701-781, 701-957 Заказ будет доставлен в пункт выдачи через 3-5 рабочих дня. Время работы: с понедельника по пятницу с 9-00 до 18-00.',
          hintContent: 'Центр выдачи в Мурманске',
        },
        options: {
          preset: 'islands#violetDotIcon',
        },
      },
    ]);
  });
}, 3000);
setTimeout(() => {
  console.log('sec');

  yMap.isInited.then(() => {
    yMap.addNewObjects([
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            31.26360,
            58.53901,
          ],
        },
        properties: {
          balloonContent: 'Центр выдачи в Великом Новгороде Адрес: г.Великий Новгород, ул. Большая Санкт-Петербургская, д.39 стр 14, оф.1, СДЭК. Тел. (8162) 22-44-40 Заказ будет доставлен в пункт выдачи через 2-4 рабочих дня. Время работы: с понедельника по пятницу с 9-00 до 18-00.',
          hintContent: 'Центр выдачи в Великом Новгороде',
        },
        options: {
          preset: 'islands#violetDotIcon',
        },
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [
            33.0905,
            68.97468,
          ],
        },
        properties: {
          balloonContent: 'Центр выдачи в Мурманске Адрес: г.Мурманск, ул. Володарского, д. 7, СДЭК. тел. (8152)701-781, 701-957 Заказ будет доставлен в пункт выдачи через 3-5 рабочих дня. Время работы: с понедельника по пятницу с 9-00 до 18-00.',
          hintContent: 'Центр выдачи в Мурманске',
        },
        options: {
          preset: 'islands#violetDotIcon',
        },
      },
    ]);
  });
}, 6000);
