import { PageLoaderBase } from './PageLoaderBase.js'

export class Projects extends PageLoaderBase {
    constructor(nav) {
        super(nav);
        this.currentPage = "myProjects"
    }

  LoadPage () {
    // load everything like listeners and page
    document.querySelector('#app').innerHTML = `
        ${this.header}
        <div>MyPrjects</div>
        ${this.footer}
    `

      super.LoadPage()
  }
}
