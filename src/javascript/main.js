import '../styling/style.css'
import { NavHandler } from './classes/NavHandler.js'
import { Aboutme } from './PageLoaders/AboutMe.js'
import { Projects } from './PageLoaders/Projects.js'

const Navigation = new NavHandler()
const pages = {
  aboutme: Aboutme,
  myProjects: Projects
}

const currentPoint = Navigation.GetCurrentPoint()

if (pages[currentPoint]) {
  const PageClass = pages[currentPoint]
  const pageInstance = new PageClass()

  pageInstance.LoadPage()
} else {
  document.querySelector('#app').innerHTML = `
        <div id="notfoundError">404 this page doesn't exist</div>
    `
}
