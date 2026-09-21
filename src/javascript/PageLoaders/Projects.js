import {PageLoaderBase} from './PageLoaderBase.js'
import nick from "../../assets/nick-widle-zootopia.gif"

export class Projects extends PageLoaderBase {
    constructor(nav) {
        super(nav);
        this.currentPage = "myProjects"
    }

    LoadPage() {
        // load everything like listeners and page
        document.querySelector('#app').innerHTML = `
        ${this.header}
        <div>
            <div>
                <h1>
                    Random selection
                </h1>
                <div id="random-selection">
                    ${this.loadRandomProjects()}
                </div>
            </div>
        </div>
        ${this.footer}
    `

        super.LoadPage()
    }

    loadRandomProjects() {
        let html = "";
        const results = [
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
        ]

        results.forEach((result) => {
            html += `<div class="project-element"><img src="${result.image}"> <div class="name-container">${result.name}</div></div>`
        })

        return html
    }
}
