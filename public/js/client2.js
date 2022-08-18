const con = document.querySelector('.wishlist-container');

con.addEventListener('click', async (elem) => {
  const id = elem.target.name;
  const res2 = await fetch(`/wishlist//delete/${id}`, {
    method: 'GET',
  });
  if (res2.status === 200) {
    const ul = document.querySelector('.wish-ul');
    con.removeChild(ul);
  }
});
