/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-comment-textnodes */
const React = require('react');
const Layout = require('../components/Layout');

module.exports = function Main({ title }) {
  return (
    <Layout title={title}>
      <div className="container">
        <div className="container text-center">
          <div className="row" />
          <div className="row">
            <div className="col-4">
              <select className="form-select" aria-label="Default select example">
                <option selected>Категория</option>
                <option value="1">Квартира</option>
                <option value="2">Комната</option>
              </select>
              <div className="checkbox form-check form-check-inline">
                <h8>Количество комнат :</h8>
                <div className="boxcheck">
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2" />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" />
                  <label className="form-check-label" htmlFor="inlineCheckbox3">3</label>
                </div>
                </div>
              </div>
              <h8 className="aria-price">Диапозон цены:</h8>
              <div className="price-container">
                <div className="input-group mb-3">
                  <span className="input-group-text">₽</span>
                  <span className="input-group-text">0</span>
                  <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                </div>
                <div className="input-group">
                  <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" />
                  <span className="input-group-text">₽</span>
                  <span className="input-group-text">50000</span>
                </div>
              </div>
            </div>
            <div className="col-8" />
          </div>
        </div>
      </div>
    </Layout>
  );
};
