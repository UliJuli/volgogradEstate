const React = require('react');
const Layout = require('../components/Layout');

module.exports = function UserUpdate({ title }) {
  return (
    <Layout title={title}>
      <form action="/setting" method="PUT">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Имя</label>
          <input name="firstName" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Фамилия</label>
          <input name="lastName" type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Номер телефона</label>
          <input name="phoneNumber" type="tel" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Адрес электронной почты</label>
          <input name="email" type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input name="password" type="password" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">Обновить данные</button>
      </form>
    </Layout>
  );
};
