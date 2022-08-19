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
  const headerData = `${id} <- balloon.properties.balloonContentHeader`;
  const bodyData = `${id} <- balloon.properties.balloonContentBody`;
  const footerData = `${id} <- balloon.properties`;
  return { headerData, bodyData, footerData };
}

function checkAdvForCookies(adv) {
  const { id } = adv;
  if (localStorage.viewedAdvs.includes(id)) return true;
  return false;
}
