async function loadBalloonData(balloonId) {
  console.log('~ loadBalloonData');
  return { headerData: 'header date', bodyData: 'footer date', footerData: 'footerdata' };
}

function checkBalloonsForCookies(balloons) {
  return balloons.map((balloon) => {
    const { id } = balloon;
    if (!localStorage.viewedAdvs.includes(id)) return;

    balloon.options.preset = 'islands#yellowDotIcon';
  });
}
