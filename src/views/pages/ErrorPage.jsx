const React = require('react');
const Layout = require('../components/Layout');

module.exports = function Error({ title, error }) {
  return (
    <Layout title={title}>
      <h1>{error.message}</h1>
      <h2>{error.status}</h2>
      <pre>{error.stack}</pre>
    </Layout>
  );
};
