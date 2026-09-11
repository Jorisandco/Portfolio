import {PageLoaderBase} from './PageLoaderBase.js'
import profilepic from "../../assets/nick-widle-zootopia.gif"

export class Aboutme extends PageLoaderBase {
    LoadPage() {
        // load everything like listeners and page
        document.querySelector('#app').innerHTML = `
        ${this.header}
        <div class="PageContainer">
            <div class="ProfileContainer">
                <div id="Profilephoto"><img id="Photo"></div>
                <div id="ProfileDescription">
                <h2>
                    About me
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat feugiat metus id pretium. Nam dui mi, tempor sed lacus et, eleifend aliquet eros. Praesent vitae dui sed risus ullamcorper feugiat. Sed tincidunt finibus eleifend. Integer tellus ante, porttitor at felis nec, imperdiet ultrices metus. Integer ac pharetra ex. Etiam ultricies augue in ante scelerisque cursus. Nam luctus facilisis efficitur. Duis sed pellentesque dui. Ut vitae enim et lorem pharetra luctus. Morbi congue ac justo at pellentesque. Phasellus et sem quam. Proin mi tortor, facilisis sit amet velit viverra, auctor placerat est. </p>
            </div>
            </div>
            <div class="expirienceContainer">
                <div id="languages">
                
                </div>
                <div id="software">
                
                </div>
            </div>
        </div>
        ${this.footer}
    `

        this.loadPhotos()

    }

    UnloadPage() {
        // remove page and unload listeners
    }

    loadPhotos(){
        // load actual photos
        const photoElement = document.getElementById("Photo")

        photoElement.src = profilepic
    }
}
