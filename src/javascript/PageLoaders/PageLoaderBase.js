export class PageLoaderBase {
    constructor(nav){
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
        document.getElementById("about_me").addEventListener("click", () => {
            this.nav.switchPage("aboutme")
            window.location.reload()
        })
        document.getElementById("Projects").addEventListener("click", () => {
            this.nav.switchPage("myProjects")
            window.location.reload()
        })
        document.getElementById("Contact_me").addEventListener("click", () => {
            this.nav.switchPage("Contactme")
            window.location.reload()
        })
    }
}