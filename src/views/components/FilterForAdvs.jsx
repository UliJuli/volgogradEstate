const React = require('react');

class FilterForAdvs extends React.PureComponent {
  render() {
    return (
      <form className="form-filter" method="post" action="/filter">
        <div className="filter-category">
          <p>Категория:</p>
          <select name="apart" className="form-select" aria-label="Default select example">
            <option value="1" selected>Выберите тип</option>
            <option value="1">Квартира</option>
            <option value="2">Комната</option>
            <option value="3">Дом</option>
          </select>
        </div>
        <div className="checkbox form-check form-check-inline">
          <h8>Количество комнат :</h8>
          <div className="boxcheck">
            <div className="form-check form-check-inline">
              <input name="roomCount1" className="form-check-input" type="checkbox" id="roomCount-1" value="1" />
              <label className="form-check-label" htmlFor="roomCount-1">1</label>
            </div>
            <div className="form-check form-check-inline">
              <input name="roomCount2" className="form-check-input" type="checkbox" id="roomCount-2" value="2" />
              <label className="form-check-label" htmlFor="roomCount-2">2</label>
            </div>
            <div className="form-check form-check-inline">
              <input name="roomCount3" className="form-check-input" type="checkbox" id="roomCount-3" value="3" />
              <label className="form-check-label" htmlFor="roomCount-3">3</label>
            </div>
          </div>
        </div>
        <h8 className="aria-price">Диапозон цены:</h8>
        <div className="price-container">
          <div className="input-group mb-3">
            <span className="input-group-text">₽</span>
            <span className="input-group-text">0</span>
            <input name="minPrice" type="text" className="form-control" aria-label="Минимальная стоимость" />
          </div>
          <div className="input-group">
            <input name="maxPrice" type="text" className="form-control" aria-label="Максимальная стоимость" />
            <span className="input-group-text">₽</span>
            <span className="input-group-text">50000</span>
          </div>
        </div>
        <button type="submit" className="filter-btn">Фильтровать</button>
      </form>
    );
  }
}

module.exports = FilterForAdvs;
