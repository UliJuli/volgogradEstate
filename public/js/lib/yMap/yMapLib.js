/**
 * loads data from db and convert it ti html
 * @param {post id from db} id
 * @return {{ headerData, bodyData, footerData }}
 */
async function loadBalloonData(id) {
  return {
    headerData: `${id} <- balloon.properties.balloonContentHeader`,
    bodyData: `${id} <- balloon.properties.balloonContentBody`,
    footerData: `${id} <- balloon.properties`,
  };
}

function checkAdvForCookies(adv) {
  const { id } = adv;
  if (localStorage.viewedAdvs.includes(id)) return true;
  return false;
}

function callBack() {
  console.log(yMap.visibleObjects);
}
