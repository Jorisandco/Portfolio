import { PageLoaderBase } from './PageLoaderBase.js'

export class Aboutme extends PageLoaderBase {
  LoadPage () {
    // load everything like listeners and page
    document.querySelector('#app').innerHTML = `
        ${this.header}
        <div>hi</div>
        ${this.footer}
    `
  }

  UnloadPage () {
    // remove page and unload listeners
  }
}
