import {loadPage} from "../loadpage.js";

export class PageLoaderBase {
    constructor(nav) {
        this.loader = null
        this.currentPage = "aboutme"
        this.abortController = null;
        this.header = `
            <header id="header">
            <div id="logoContainer">logo</div>
            <div id="Navigation">
            <a id="aboutme"><div>About me</div></a>
            <a id="myProjects"><div>Projects</div></a>
            <a id="Contactme"><div>Contact me</div></a>
            </div>
            </header>
        `;

        this.footer = `
            <footer id="footer">this is a footer</footer>
        `;
        this.nav = nav
    }

    LoadPage(loadPageFunction) {
        // load everything like listeners and page
        try {
            document.getElementById(this.currentPage).style.color = "#2a456c"
        } catch (e) {
            console.error("Page doesn't exist")
        }

        this.addListeners()

        this.loader = loadPageFunction
    }

    addListeners() {
        try {
            // Instantiate a new AbortController per page lifecycle
            this.abortController = new AbortController();
            const {signal} = this.abortController;

            const pages = ["aboutme", "myProjects", "Contactme"];

            pages.forEach((page) => {
                const Element = document.getElementById(page);
                if (Element) {
                    Element.addEventListener("click", () => this.BaseSwitch(page), {signal});
                }
            });

            return true;
        } catch (e) {
            return false;
        }
    }

    UnloadPage() {
        if (this.abortController) {
            // Unbinds ALL listeners attached with this controller's signal at once
            this.abortController.abort();
            this.abortController = null;
        }
    }

    BaseSwitch(page) {
        this.nav.switchPage(page)
        this.UnloadPage()
        loadPage()
    }
}