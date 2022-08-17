/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/jsx-no-comment-textnodes */
const React = require('react');
const Layout = require('../components/Layout');
const FilterForAdvs = require('../components/FilterForAdvs');
const AdvsDrawer = require('../lib/AdvsDrawer');

module.exports = function Main({ user, rooms }) {
  return (
    <Layout user={user}>
      <div className="container">
        <div className="container text-center">
          <div className="row" />
          <div className="row">
            <div className="col-4">
              <FilterForAdvs />
            </div>
            <div className="col-8">
              <AdvsDrawer rooms={rooms} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
