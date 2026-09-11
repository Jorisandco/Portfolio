import { PageLoaderBase } from './PageLoaderBase.js'

export class Projects extends PageLoaderBase {
  LoadPage () {
    // load everything like listeners and page
    document.querySelector('#app').innerHTML = `
        ${this.header}
        <div>MyPrjects</div>
        ${this.footer}
    `
  }

  UnloadPage () {
    // remove page and unload listeners
  }
}
