export class PageLoaderBase {
    constructor(nav){
        this.listeners = []

        this.currentPage = "about_me"
        this.header = `
            <header id="header">
            <div id="logoContainer">logo</div>
            <div id="Navigation">
            <a id="about_me"><div>About me</div></a>
            <a id="Projects"><div>Projects</div></a>
            <a id="Contact_me"><div>Contact me</div></a>
            </div>
            </header>
        `;

        this.footer = `
            <footer id="footer">this is a footer</footer>
        `;
        this.nav = nav
    }

    LoadPage(){
        // load everything like listeners and page
        document.getElementById(this.currentPage).style.color = "#2a456c"
        this.addListeners()

    }

    addListeners(){
        document.getElementById("about_me").addEventListener("click", () => {
            this.BaseSwitch("aboutme")
        })
        document.getElementById("Projects").addEventListener("click", () => {
            this.BaseSwitch("myProjects")
        })
        document.getElementById("Contact_me").addEventListener("click", () => {
            this.BaseSwitch("Contactme")
        })
    }

    UnloadPage(){
        document.getElementById("about_me").removeEventListener("click", () => {
            this.BaseSwitch("aboutme")
        })
        document.getElementById("Projects").removeEventListener("click", () => {
            this.BaseSwitch("myProjects")
        })
        document.getElementById("Contact_me").removeEventListener("click", () => {
            this.BaseSwitch("Contactme")
        })
    }

    BaseSwitch(page){
        this.nav.switchPage(page)
    }
}