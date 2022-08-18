const div = document.querySelector('.advs-container');

div.addEventListener('click', async (el) => {
  const btn = el.target.parentElement;
  if (btn.className.includes('btn-wishes')) {
    const { id } = btn.parentElement.parentElement.parentElement.parentElement;
    const res = await fetch(`/user/add/${id}`, {
      method: 'POST',
    });
    if (res.status === 200) {
      btn.classList.toggle('btn-outline-danger');
      btn.classList.toggle('btn-danger');
      ShowSuccess('Добавили в избранное');
    }
    if (res.status === 300) {
      btn.classList.toggle('btn-danger');
      btn.classList.toggle('btn-outline-danger');
      ShowError('Убрали из избранное');
    }
  }
});
