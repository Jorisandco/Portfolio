export class PageLoaderBase {
    constructor(){
        this.header = `
            <header id="header"><div id="logoContainer"></div><div id="Navigation"></div></header>
        `;

        this.footer = `
            <footer id="footer">this is a footer</footer>
        `;
    }

    LoadPage(){
        // load everything like listeners and page 
    }

    UnloadPage(){
        // remove page and unload listeners 
    }
}