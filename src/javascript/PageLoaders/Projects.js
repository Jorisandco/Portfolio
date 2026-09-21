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

                </div>
            </div>
        </div>
        ${this.footer}
    `

        this.loadProjects()
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

    loadProjects() {
        const projectContainer = document.querySelector("#allProjects")

        projectContainer.innerHTML = `
            ${this.showAllProjects()}
            <div class="pagination">
                <div class="page-btn" id="page-down"><</div>
                ${this.loadPageCount()}
                <div class="page-btn" id="page-up">\></div>
            </div>
        `

        this.loadPaginationListeners()
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
        const maximumPageination = this.currentPageCount + 3
        let maxNumber = maximumPageination <= maxPageCount ? maximumPageination : maxPageCount

        if (startPoint === maxPageCount)
            startPoint -= 5
        else
            startPoint -= 3

        for (let i = startPoint; i <= maxNumber; i++) {
            if (i < 1)
                continue
            if (i !== this.currentPageCount)
                html += `<div class="page-number">${i}</div>`
            else
                html += `<div class="page-number selected">${i}</div>`
        }

        if (maximumPageination < maxPageCount)
            html += `<div class="page-number">${maxPageCount}</div>`
        if ((startPoint) > 1) {
            console.log("hi")
            html = `<div class="page-number">1</div>` + html
        }

        return html
    }

    loadPaginationListeners() {
        const numbers = document.querySelectorAll(".page-number")
        this.pageinationAbort = new AbortController()
        const {paginationAbort} = this.pageinationAbort

        numbers.forEach((number) => {
            number.addEventListener("click", () => {
                const page = parseInt(number.innerText)
                this.abortPagination()
                this.currentPageCount = page
                this.loadProjects()
            }, {paginationAbort})
        })
    }

    abortPagination() {
        if (this.pageinationAbort) {
            // Unbinds ALL listeners attached with this controller's signal at once
            this.pageinationAbort.abort();
            this.pageinationAbort = null;
        }
    }

    UnloadPage() {
        super.UnloadPage();
        this.abortPagination()
    }
}
