import {PageLoaderBase} from './PageLoaderBase.js'
import profilepic from "../../assets/ProfilePicture.43.03.jpeg"
import htmlIcon from "../../assets/Icons/html-5-svgrepo-com.svg"
import cssIcon from "../../assets/Icons/css-3-svgrepo-com.svg"
import JavascriptIcon from "../../assets/Icons/javascript-svgrepo-com.svg"
import CsharpIcon from "../../assets/Icons/csharp2-svgrepo-com.svg"
import PythonIcon from "../../assets/Icons/python-svgrepo-com.svg"
import FlutterIcon from "../../assets/Icons/flutter-svgrepo-com.svg"
import JavaIcon from "../../assets/Icons/java-svgrepo-com.svg"
import VueIcon from "../../assets/Icons/vue-svgrepo-com.svg"

export class Aboutme extends PageLoaderBase {
    LoadPage() {
        // load everything like listeners and page
        let languagesHtml = ""
        //  make sure to load them in with api later down the line for easier editing
        let languages = [
            {
                icon: htmlIcon,
                text: "HTML"
            },
            {
                icon: cssIcon,
                text: "CSS"
            },
            {
                icon: JavascriptIcon,
                text: "Javascript"
            },
            {
                icon: CsharpIcon,
                text: "Csharp"
            },
            {
                icon: PythonIcon,
                text: "Python"
            },{
                icon: JavaIcon,
                text: "Java"
            },{
                icon: FlutterIcon,
                text: "Flutter"
            },{
                icon: VueIcon,
                text: "Vue.js"
            },
        ]

        languages.forEach((language) => {
            languagesHtml += `
                <div class="item">
                    <img class="language-icon" src="${language.icon}"><p>${language.text}</p>
                </div>
            `
        })

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
                <div class="experienceContainer">
                    <div id="languages">
                        <h3>Languages I have experience in:</h3>
                        <div class="codeLanguagesContainer">
                            ${languagesHtml}
                        </div>
                    </div>
                    <div id="software">
                    
                    </div>
                </div>
            </div>
<!--            ${this.footer}-->
        `

        this.loadPhotos()

    }

    UnloadPage() {
        // remove page and unload listeners
    }

    loadPhotos() {
        // load actual photos
        const photoElement = document.getElementById("Photo")

        photoElement.src = profilepic
    }
}
