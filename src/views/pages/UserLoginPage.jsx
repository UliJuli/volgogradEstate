const React = require('react');
const Layout = require('../components/Layout');

module.exports = function UserRegistrationPage({ title }) {
  return (
    <Layout title={title}>
      <form action="/login" method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Адрес электронной почты</label>
          <input name="email" type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input name="password" type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>
      <a href="/user_registration" className="btn btn-primary">Нет аккаунта</a>
    </Layout>
  );
};
