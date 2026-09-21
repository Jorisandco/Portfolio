import {PageLoaderBase} from './PageLoaderBase.js'
import nick from "../../assets/nick-widle-zootopia.gif"

export class Projects extends PageLoaderBase {
    constructor(nav) {
        super(nav);
        this.currentPage = "myProjects"
        this.currentPageCount = 2
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
                <div id="allProjects">
                    ${this.showAllProjects()}
                    <div class="pagination">
                        <div class="page-number" id="page-down"><</div>
                        ${this.loadPageCount()}
                        <div class="page-number" id="page-up">\></div>
                    </div>
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

    showAllProjects() {
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

    loadPageCount() {
        let html = "";
        let startPoint = this.currentPageCount
        const maxPageCount = 10;
        const maximumPageination = this.currentPageCount + 5
        let maxNumber = maximumPageination <= maxPageCount ? maximumPageination : maxPageCount

        if (startPoint === maxPageCount) {
            startPoint -= 5
            maxNumber++
        }

        for (let i = startPoint; i < maxNumber; i++) {
            if (i !== this.currentPageCount)
                html += `<div class="page-number">${i}</div>`
            else
                html += `<div class="page-number selected">${i}</div>`
        }

        if (maximumPageination <= maxPageCount)
            html += `<div class="page-number">${maxPageCount}</div>`

        return html
    }
}
