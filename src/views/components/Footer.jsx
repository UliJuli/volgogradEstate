const React = require('react');

class Footer extends React.PureComponent {
  render() {
    return (
      <footer className="text-center text-lg-start bg-light text-muted">
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 footer-container">
          {/* Links */}
          <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>

          <i className="fas fa-envelope me-3" />
          <p><a href="mailto:info@example.com">info@example.com</a></p>

          <p>
            <i className="fas fa-envelope me-3" />
            © 2022 Все права защищены
          </p>
        </div>
      </footer>
    );
  }
}

module.exports = Footer;
