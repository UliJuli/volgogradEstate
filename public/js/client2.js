const con = document.querySelector('.container');

con.addEventListener('click', async (elem) => {
  if (elem.target.parentNode.className.includes('btn-wishes')) {
    const { id } = elem.target.parentNode;
    const res = await fetch(`/user/delete/${id}`, {
      method: 'POST',
    });
    const btn = document.getElementById(id);
    const div = document.querySelector('.delete-con');
    if (res.status === 200) {
      div.removeChild(btn.parentNode.parentNode.parentNode.parentNode);
    }
  }
});

