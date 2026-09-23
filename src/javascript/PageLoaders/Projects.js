import {PageLoaderBase} from './PageLoaderBase.js'
import nick from "../../assets/nick-widle-zootopia.gif"

export class Projects extends PageLoaderBase {
    constructor(nav) {
        super(nav);
        this.currentPage = "myProjects"
        this.currentPageCount = 1
    }

    LoadPage() {
        // load everything like listeners and page
        document.querySelector('#app').innerHTML = `
        ${this.header}
        <div>
            <div>
                <div id="projects-container">
                    <div id="allProjects">
    
                    </div>
                </div>
            </div>
        </div>
        ${this.footer}
    `

        this.loadProjects()
        super.LoadPage()
    }

    loadProjects() {
        const projectContainer = document.querySelector("#allProjects")

        projectContainer.innerHTML = `
            <h1>
              All my projects
            </h1>
            <div id="projects">
                ${this.showAllProjects()}
            </div>
            <div class="pagination">
                
                ${this.loadPageCount()}
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
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
            {name: "Name", image: nick},
        ]

        results.forEach((result) => {
            html += `<div class="project-element all-projects"><img src="${result.image}"> <div class="name-container">${result.name}</div></div>`
        })

        return html
    }

    loadPageCount() {
        let html = "";
        let startPoint = this.currentPageCount - 3
        const maxPageCount = 1;
        const maximumPageination = this.currentPageCount + 3
        let maxNumber = maximumPageination <= maxPageCount ? maximumPageination : maxPageCount

        if (maxPageCount === 1)
            return "";

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
        if ((startPoint) > 1)
            html = `<div class="page-number">1</div>` + html

        return "<div class=\"page-btn\" id=\"page-down\"><</div>" + html + "<div class=\"page-btn\" id=\"page-up\">></div>"
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
