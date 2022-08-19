const React = require('react');
const YandexMapsComponent = require('./YandexMapsComponent');

class AdvEditCreateForm extends React.PureComponent {
  render() {
    const {
      adv, allCategories, isEditForm,
    } = this.props;
    return (
      <form
        action={isEditForm ? `/admin/advs/${adv.id}` : '/admin/advs'}
        method="POST"
        encType="multipart/form-data"
      >
        <select name="category" className="form-select" aria-label="Default select example">
          <option selected disabled>Выбор категории</option>
          {allCategories.map((category) => (
            <option key={category.id}>{category.name}</option>
          ))}
        </select>
        <div className="mb-3">
          <label htmlFor="title-input" className="form-label">Название</label>
          <input name="title" type="text" className="form-control" id="title-input" value={isEditForm ? adv.title : ''} />
        </div>
        <div className="mb-3">
          <label htmlFor="description-input" className="form-label">Описание</label>
          <textarea name="description" className="form-control" id="description-input" rows="3">
            {isEditForm ? adv.description : ''}
          </textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="address-input-string" className="form-label">Адрес</label>
          <input value={isEditForm ? adv.addressString : ''} name="addressString" type="text" className="form-control" id="address-input-string" />
        </div>
        <div className="mb-3">
          <label htmlFor="address-input-coords" className="form-label">addressCoord</label>
          <input value={isEditForm ? adv.addressCoords : ''} name="addressCoords" type="text" className="form-control" id="address-input-coords" />
        </div>
        <div className="mb-3">
          <YandexMapsComponent isForAdvForm={false} />
        </div>
        <div className="mb-3">
          <label htmlFor="proce-input" className="form-label">Цена</label>
          <input value={isEditForm ? adv.price : ''} name="price" type="text" className="form-control" id="proce-input" />
        </div>
        <div className="mb-3">
          <label htmlFor="square-input" className="form-label">Площадь</label>
          <input value={isEditForm ? adv.square : ''} name="square" type="text" className="form-control" id="sq-input" />
        </div>
        <div className="mb-3">
          <label htmlFor="roomCount-input" className="form-label">Количество комнат</label>
          <input value={isEditForm ? adv.roomCount : ''} name="roomCount" type="text" className="form-control" id="roomCount-input" />
        </div>
        <div className="mb-3">
          <label htmlFor="photos-input" className="form-label">Файлы загрузки</label>
          <input name="photos" className="form-control" type="file" id="photos-input" multiple />
        </div>
        <div className="mb-3">
          {!isEditForm && <button type="submit" className="btn btn-primary">Создать</button>}
          {isEditForm && <button type="submit" className="btn btn-primary">Изменить</button>}
          {isEditForm && <a href={`/admin/advs/${adv.id}/delete`} className="btn btn-primary">Удалить</a>}
        </div>
      </form>
    );
  }
}

module.exports = AdvEditCreateForm;
