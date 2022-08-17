const React = require('react');
const Layout = require('../components/Layout');

module.exports = function Main({ title, user }) {
  return (
    <Layout user={user}>
      <div className="container">
        <h1>{title}</h1>
        <div>Welcom to React SSR / Express project template</div>
      </div>
    </Layout>
  );
};
