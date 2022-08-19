const React = require('react');

class ProfileForm extends React.PureComponent {
  render() {
    const {
      profileData: {
        firstName, lastName, phoneNumber, email,
      }, isForUser,
    } = this.props;
    return (
      <form id="profile-form" action={isForUser ? '' : ''} method="PUT">
        <div className="mb-3">
          <label htmlFor="firstName-input" className="form-label">Имя</label>
          <input id="firstName-input" name="firstName" type="text" className="form-control" aria-describedby="emailHelp" defaultValue={firstName} disabled />
        </div>
        <div className="mb-3">
          <label htmlFor="lastName-input" className="form-label">Фамилия</label>
          <input id="lastName-input" name="lastName" type="text" className="form-control" defaultValue={lastName} disabled />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber-input" className="form-label">Номер телефона</label>
          <input id="phoneNumber-input" name="phoneNumber" type="tel" className="form-control" defaultValue={phoneNumber} disabled />
        </div>
        <div className="mb-3">
          <label htmlFor="email-input" className="form-label">Адрес электронной почты</label>
          <input id="email-input" name="email" type="email" className="form-control" defaultValue={email} disabled />
        </div>
        <div className="mb-3">
          <label htmlFor="password-input" className="form-label">Пароль</label>
          <input id="password-input" name="password" type="password" className="form-control" required disabled />
        </div>
        <div className="mb-3">
          <div className="d-flex flex-row">
            <button id="profile-edit-btn" type="button" className="btn btn-primary">
              <svg className="bi" width="20" height="20"><use xlinkHref="#settings" /></svg><span className="ms-1 d-none d-sm-inline"> Изменить</span>
            </button>
            <button name="submit" type="submit" className="btn btn-primary" disabled style={{ marginLeft: 'auto' }}>
              <svg className="bi" width="20" height="20"><use xlinkHref="#ok" /></svg><span className="ms-1 d-none d-sm-inline"> Подтвердить</span>
            </button>
          </div>
        </div>
        <script defer src="/js/lib/profileFormHandler.js" />
      </form>
    );
  }
}

module.exports = ProfileForm;
