/**
 * loads data from db and convert it ti html
 * @param {post id from db} id
 * @return {{ headerData, bodyData, footerData }}
 */
async function loadAdvData(id) {
  const advData = getDataSesStorageObj('advsData', id);
  if (advData) return advData;

  const req = await fetch(`/flat/${id}`, {
    method: 'POST',
  });
  const res = await req.json();
  addDataSesStorageObj('advsData', res);
  return res;
}

/**
 * loads data from db and convert it ti html
 * @param {post id from db} id
 * @return {{ headerData, bodyData, footerData }}
 */
async function renderAdvMapSnippet(id) {
  const advData = await loadAdvData(id);
  console.log('~ advData', advData);
  const headerData = advData.title;
  const bodyData = `<div>${advData.description}. Цена: ${advData.price} руб.</div>`;
  const footerData = `<div>Площадь: ${advData.square} м2</div><div>Кол-во комнат: ${advData.roomCount}</div>`;
  return { headerData, bodyData, footerData };
}

function checkAdvForCookies(adv) {
  const { id } = adv;
  if (localStorage.viewedAdvs.includes(id)) return true;
  return false;
}
