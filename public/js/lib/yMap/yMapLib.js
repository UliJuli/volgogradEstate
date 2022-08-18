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

function checkBalloonsForCookies(balloons) {
  return balloons.map((balloon) => {
    const { id } = balloon;
    if (!localStorage.viewedAdvs.includes(id)) return;

    balloon.options.preset = 'islands#yellowDotIcon';
  });
}
