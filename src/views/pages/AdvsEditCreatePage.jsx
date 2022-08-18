const React = require('react');
const Layout = require('../components/Layout');

module.exports = function AdvsEditCreate({ title, allCategories }) {
  return (
    <Layout title={title}>
      <form
        action="/advs_edit"
        method="POST"
        encType="multipart/form-data"
      >
        <select name="category" className="form-select" aria-label="Default select example">
          <option selected>Для выбора категории нажмите сюда</option>
          {allCategories.map((category) => (
            <option key={category.id} id={category.id}>{category.name}</option>
          ))}
        </select>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Название</label>
          <input name="title" type="text" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Описание</label>
          <textarea name="description" className="form-control" id="exampleFormControlTextarea1" rows="3" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Адрес</label>
          <input name="addressString" type="text" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">addressCoord</label>
          <input name="addressCoords" type="text" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Цена</label>
          <input name="price" type="text" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Площадь</label>
          <input name="square" type="text" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Количество комнат</label>
          <input name="roomCount" type="text" className="form-control" id="exampleFormControlInput1" />
        </div>
        <div className="mb-3">
          <label htmlFor="formFileMultiple" className="form-label">Файлы загрузки</label>
          <input name="photos" className="form-control" type="file" id="formFileMultiple" multiple />
        </div>
        <button type="submit" className="btn btn-primary">
          Изменить/Создать
        </button>
      </form>
      <button type="submit" className="btn btn-primary">
        Удалить, объявление
      </button>
      {/* <a href="/user_registration" className="btn btn-primary">Создать/Изменить</a> */}
    </Layout>
  );
};
