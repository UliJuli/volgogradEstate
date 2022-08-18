const div = document.querySelector('.advs-container');

div.addEventListener('click', async (el) => {
  const { id } = el.target.id;
  console.log("~ id", id)
  

  const res = await fetch(`/wishlist/add/${id}`, {
    method: 'POST',
  });
  const btn = document.querySelector('.btn-wishes');
  console.log('~ btn', btn);
  if (res.status === 200) {
    btn.innerHTML = `<button id=${id} type="button" class="btn btn-success btn-wishes">Добавлено в избранное</button> `;
  }
  if (res.status === 300) {
    btn.innerHTML = `<button id=${id} type="button" class="btn btn-wishes">В избранное</button>`;
  }
});

const btnInfo = document.querySelector('.btn-info');

btnInfo.addEventListener('click', () => {
  const id = doc
} )
