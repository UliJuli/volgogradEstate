// Main constructor of all Pages
class Component {
  /**
   * check did we already mount script on the site
   * @param {src} src
   * @returns {true/false}
   */
  static isScriptMounted(src) {
    return !!document.querySelector(`script[src="${src}"]`);
  }

  #scriptsPromises = []; // <- to keep all promises of scripts

  /**
   * @param {[srces]/src/null} srces <- in format '/js/script_src'
   */
  constructor(srces) {
    if (!srces) { this.#scriptsPromises = [Promise.resolve()]; return; }
    if (Array.isArray(srces)) { this.#addScripts(srces); return; }
    this.#addScripts([srces]);
  }

  /**
   * return Promise.all for all awaiting scripts
   * @returns {Promise}
   */
  onReady = () => Promise.all(this.#scriptsPromises);

  /**
   * adding scripts loaders to the awaiting array
   * @param {[srces]} srces <- only Array of srces in format '/js/script_src'
   */
  #addScripts(srces) {
    srces.forEach((src) => {
      if (Component.isScriptMounted(src)) return;
      const scriptPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        script.async = true;
        document.head.appendChild(script);
      });
      this.#scriptsPromises.push(scriptPromise);
    });
  }
}
