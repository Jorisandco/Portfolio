import { PageLoaderBase } from './PageLoaderBase.js'

export class NotFound extends PageLoaderBase {
    constructor(nav) {
        super(nav);
        this.currentPage = null
    }

  LoadPage () {
    // load everything like listeners and page
    document.querySelector('#app').innerHTML = `
        ${this.header}
                <div id="notfoundError">404 this page doesn't exist</div>
        ${this.footer}
    `

      addEventListener("click")
  }

  UnloadPage () {
    // remove page and unload listeners
  }
}
