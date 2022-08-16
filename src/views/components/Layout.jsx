const React = require('react');

const Header = require('./Header');
const Footer = require('./Footer');

module.exports = function Layout({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"
        />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />

        <script defer src="/js/lib/Component.js" />
        <script defer src="/js/lib/Page.js" />
        <script defer src="/js/pages/MainPage.js" />

        <script defer src="/js/lib/init.js" />
        <title>{title}</title>
      </head>
      <body>
        <Header />
        <main id="main-container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};
