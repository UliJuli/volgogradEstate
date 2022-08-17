const div = document.querySelector('.advs-container');

div.addEventListener('click', async (el) => {
  const id = el.target.name;
  const res = await fetch(`/wishlist/add/${id}`, {
    method: 'POST',
  });
  const btn = document.querySelector('.btn-wishes');
  if (res.status === 200) {
    btn.innerHTML = `<button name=${id} type="button" class="btn btn-danger btn-wishes">Добавлено в избранное</button> `;
  }
  if (res.status === 300) {
    btn.innerHTML = `<button name=${id} type="button" className="btn btn-wishes">В избранное</button>`;
  }
});
