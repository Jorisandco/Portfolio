import '../styling/style.css'
import {NavHandler} from './classes/NavHandler.js'
import {Aboutme} from './PageLoaders/AboutMe.js'
import {Projects} from './PageLoaders/Projects.js'
import {NotFound} from "./PageLoaders/NotFound.js";

const Navigation = new NavHandler()
const pages = {
    aboutme: Aboutme,
    myProjects: Projects,
    none: NotFound
}

function loadPage(pageIns = null) {
    const currentPoint = Navigation.GetCurrentPoint()
    let PageClass

    if (pageIns !== null)
        pageIns.UnloadPage()

    if (pages[currentPoint])
        PageClass = pages[currentPoint]
    else {
        PageClass = pages["none"]
        Navigation.switchPage("none")
    }

    const pageInstance = new PageClass(Navigation)
    pageInstance.LoadPage()

    return pageInstance
}

loadPage();