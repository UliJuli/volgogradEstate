function ShowAlert(type, iconName, message) {
  const body = document.querySelector('body');
  const success = document.createElement('div');
  success.classList = 'alert alert-dismissible fade show position-fixed bottom-0 end-0  d-flex align-items-center';
  success.style.width = 'fit-content';
  success.style.margin = '1.5rem';
  success.classList.add(type);
  success.setAttribute('role', 'alert');
  success.innerHTML = `
    <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:"><use xlink:href="#${iconName}"/></svg>
      <div>
        ${message}
      </div>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Закрыть"></button>`;
  body.appendChild(success);
}

function ShowSuccess(message) {
  ShowAlert('alert-success', 'ok', message);
}

function ShowError(message) {
  ShowAlert('alert-danger', 'error', message);
}

function ShowWarning(message) {
  ShowAlert('alert-warning', 'info', message);
}

function ErrorsHandler(errType) {
  if (!errType) { ShowError('Ошибка сервера'); return; }
  if (errType === 'wPassword') { ShowError('Неверный пароль'); return; }
  if (errType === 'wEmail') { ShowError('Неверный email'); }
}
