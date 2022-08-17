function profileFormHandler() {
  const editBtn = document.getElementById('profile-edit-btn');
  const form = document.getElementById('profile-form');

  function toggleLockProfile() {
    editBtn.classList.toggle('active');
    editBtn.disabled = !editBtn.disabled;
    form.firstName.disabled = !form.firstName.disabled;
    form.lastName.disabled = !form.lastName.disabled;
    form.phoneNumber.disabled = !form.phoneNumber.disabled;
    form.email.disabled = !form.email.disabled;
    form.password.disabled = !form.password.disabled;
    form.submit.disabled = !form.submit.disabled;

    if (form.submit.disabled) return;

    ShowWarning('Профиль раблокирован');
  }

  editBtn.addEventListener('click', (btnEvent) => {
    btnEvent.preventDefault();
    toggleLockProfile();
  });

  form.addEventListener('submit', async (subEvent) => {
    subEvent.preventDefault();

    const isProfileForm = window.location.pathname.includes('user');
    const {
      firstName, lastName, phoneNumber, email, password,
    } = subEvent.target;

    const dataToUpdate = {};
    if (firstName) dataToUpdate.firstName = firstName.value;
    if (lastName) dataToUpdate.lastName = lastName.value;
    if (phoneNumber) dataToUpdate.phoneNumber = phoneNumber.value;
    if (email) dataToUpdate.email = email.value;
    dataToUpdate.password = password.value;

    const action = isProfileForm ? '/user/profile' : '/admin/profile';
    const req = await fetch(action, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToUpdate),
    });

    password.value = '';

    if (req.status !== 200) {
      const res = await req.json();
      const { errType } = res;
      ErrorsHandler(errType);
      return;
    }

    ShowSuccess('Данные, успешно изменены');
    toggleLockProfile();
  });
}

profileFormHandler();
