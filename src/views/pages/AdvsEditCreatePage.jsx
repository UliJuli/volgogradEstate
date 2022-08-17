const React = require('react');
const Layout = require('../components/Layout');

module.exports = function AdvsEditCreate({ title, allCategories }) {
  return (
    <Layout title={title}>
      <form
        action="/advs_edit"
        method="POST"
      >
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Название</label>
          <input name="title" type="text" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Описание</label>
          <textarea name="desk" className="form-control" id="exampleFormControlTextarea1" rows="3" />
        </div>
        <div className="mb-3">
          <label htmlFor="formFileMultiple" className="form-label">Для загрузки нескольких фото удерживайте ctrl при выборе файлов:</label>
          <input name="files" className="form-control" type="file" id="formFileMultiple" />
        </div>
        <select className="form-select" aria-label="Default select example">
          <option selected>Open this select menu</option>
          {allCategories.map((category) => (
            <option key={category.id}>{category.name}</option>
          ))}
          {/* <option value="3">Three</option> */}
        </select>
        <button type="submit" className="btn btn-primary">
          Изменить/Создать
        </button>
      </form>
      {/* <a href="/user_registration" className="btn btn-primary">Создать/Изменить</a> */}
    </Layout>
  );
};
