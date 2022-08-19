function AdvsDrawer(objMap) {
  const advContainer = document.getElementById('flat-container');
  advContainer.innerHTML = '';
  objMap.visibleObjects.each(async (adv) => {
    const id = adv.options.get('id');
    const advData = await loadAdvData(id);
    advContainer.innerHTML += advTamplate(advData);
  });
}

function advTamplate(adv) {
  const {
    id, title, price, square, createdAt, photo,
  } = adv;
  const photoUrl = photo.split(',')[0];
  // ${`url('/img/flats/${photo.split(',')[0]}')`}
  return `
  <div id=${id} class="card text-white card-has-bg click-col" style='background-image: url("/img/flats/${photoUrl}"); background-size: cover'>
    <div class="card-img-overlay d-flex flex-column">
      <div class="card-body">
        <h4 class="card-title mt-0 ">${title}</h4>
        <h4 class="card-title mt-0 "><a class="text-white text-decoration-none" herf="#">${title}</a></h4>
        <small><i class="far fa-clock" />от ${createdAt.toString().slice(4, 15)}</small>
        <table class="table table-borderless table-sm" style="color: inherit">
          <tr>
            <td class="p-0">Цена:</td>
            <td class="p-0">${`${price} руб.`}</td>
          </tr>
          <tr>
            <td class="p-0">Площадь:</td>
            <td class="p-0">${`${square} м2.`}</td>
          </tr>
        </table>
        
        </div>
        <div className="card-footer">
        <div className="media d-flex flex-row" style={{ gap: '1.5rem' }}>
          <a href='/flat/${id}' type="button" class="btn btn-outline-info d-inline-flex align-items-center"><svg class="bi" width="20" height="20"><use xlink:href="#moreInfoAdvs" /></svg><span class="ms-1 d-none d-xl-inline"> Подробнее</span></a>
        </div>
      </div>
    </div>
  </div>`;
}
