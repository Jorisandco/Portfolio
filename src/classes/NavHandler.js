export class NavHandler{
    constructor(){
        this.CurrentLink = window.location.href;
        this.protocol = window.location.protocol;
        this.Linkorigin = window.location.origin;
        this.PageObjectID = null;

        console.log(window.location);
    }

    switchPage(page){
        let params = new URLSearchParams(document.location.search);
    }

    GetCurrentPoint(){
        this.CheckifCurrentPointIsSet();

        let params = new URLSearchParams(document.location.search);
        let page = params.get("page")

        if(!page){
            this.switchPage("aboutme");
            return this.GetCurrentPoint();
        }
            
        return page;
    }

    GetObjectID(){

    }

    CheckifCurrentPointIsSet(){
        const params = window.location.href.split("?")[1].split("&");

        for(let i = 0; i < (params.length -1); i++){
            if(params[i].search("page") !== -1){
                this.switchPage("aboutme");
            }
        }
    }
}