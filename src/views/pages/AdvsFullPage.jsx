const React = require('react');
const Layout = require('../components/Layout');

module.exports = function AdvsFullPage({ title, adv }) {
  console.log(adv);
  return (
    <Layout title={title}>

      { adv.photo.split(',').map((el) => (
        <div className="col-md-4">
          <div className="thumbnail">
            <a href={`/img/flats/${el}`}>
              <img src={`/img/flats/${el}`} className="rounded center" style={{ width: '100%' }} />
              <div className="caption" />
            </a>
          </div>
        </div>
      )) }
    </Layout>
  );
};

// { adv.photo.split(',').map((el) => (
//   <img src={`/img/flats/${el}`} className="rounded center" style={{ width: '100%' }} />
// )); }
