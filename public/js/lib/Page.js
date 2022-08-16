// Main constructor of all Pages
class Page extends Component {
  /**
   * change current url for new without page reload, add statement in history
   * @param {string} title
   * @param {string} newUrl
   * @param {{state_obj}} state
   */
  static changePathWithOutReload(title, newUrl, state = {}) {
    window.history.pushState(state, title, newUrl);
  }

  #pageTitle;

  /**
   * @param {pageTitle} pageTitle <- pageTitle in string
   * @param {[srces]/src/null} srces <- in format '/js/script_src'
   */
  constructor(pageTitle, srces) {
    super(srces);
    this.#pageTitle = pageTitle;
  }
}
