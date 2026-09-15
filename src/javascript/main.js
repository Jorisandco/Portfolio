import '../styling/style.css'
import {NavHandler} from './classes/NavHandler.js'
import {Aboutme} from './PageLoaders/AboutMe.js'
import {Projects} from './PageLoaders/Projects.js'

const Navigation = new NavHandler()
const pages = {
    aboutme: Aboutme,
    myProjects: Projects,
    // Contactme: contactPage
}

function loadPage() {
    const currentPoint = Navigation.GetCurrentPoint()

    if (pages[currentPoint]) {
        const PageClass = pages[currentPoint]
        const pageInstance = new PageClass(Navigation)

        pageInstance.LoadPage()

        return pageInstance
    } else {
        document.querySelector('#app').innerHTML = `
        <div id="notfoundError">404 this page doesn't exist</div>
    `
        return false
    }
}

loadPage();