export class PageLoaderBase {
    constructor(){
        this.header = `
            <header>this is a header</header>
        `;

        this.footer = `
            <footer>this is a footer</footer>
        `;
    }

    LoadPage(){
        // load everything like listeners and page 
    }

    UnloadPage(){
        // remove page and unload listeners 
    }
}