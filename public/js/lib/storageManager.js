function addDataSesStorageObj(key, data) {
  if (sessionStorage[key] === '{}') {
    const dataInStorage = sessionStorage[key].slice(0, -1);
    const dataToAppend = JSON.stringify(data).slice(1, -1);
    sessionStorage[key] = `${dataInStorage}${dataToAppend}}`;
    return;
  }
  const dataInStorage = sessionStorage[key].slice(0, -1);
  const dataToAppend = JSON.stringify(data).slice(1, -1);
  sessionStorage[key] = `${dataInStorage},${dataToAppend}}`;
}

function getDataSesStorageObj(key, dataId) {
  const dataInSesStorage = JSON.parse(sessionStorage[key]);
  if (dataInSesStorage[dataId]) return dataInSesStorage[dataId];
  return null;
}
