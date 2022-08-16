class MainPage extends Page {
  #mountPoint;

  constructor(mountSource, scriptsSource) {
    super(scriptsSource);
    this.#mountPoint = mountSource;
  }

  async render() {
    Page.changePathWithOutReload('Main Page', '/');
    await this.onReady();
    this.#mountPoint.innerHTML = `
    <div class="container">
      <h1>Welcome to the ToDo list app</h1>
      <div>Hello world!</div>
    </div>`;
  }
}

const mainPage = new MainPage(document.getElementById('main-container'));
