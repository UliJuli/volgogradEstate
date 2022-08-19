const div = document.querySelector('.advs-container');

div.addEventListener('click', async (el) => {
  if (el.target.parentNode.className.includes('btn-wishes')) {
    const { id } = el.target.parentNode;
    const res = await fetch(`/user/add/${id}`, {
      method: 'POST',
    });
    const btn = document.getElementById(id);
    if (res.status === 200) {
      btn.children[1].innerHTML = 'Добавлено в избранное';
    }
    if (res.status === 300) {
      btn.children[1].innerHTML = 'В избранное';
    }
  }
});

// const form = document.querySelector('.form-filter');

// form.addEventListener('submit', async (e) => {
//   e.preventDefault();
//   const id = e.target.apart.value;

//   const res = await fetch('/filter', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ id }),
//   });
//   const responseJson = await res.json();
 
// });
