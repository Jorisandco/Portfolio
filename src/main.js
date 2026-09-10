import './style.css'
import { NavHandler } from './classes/NavHandler.js'

const Navigation = new NavHandler()

document.querySelector('#app').innerHTML = ``

if (Navigation.GetCurrentPoint() == 'aboutme') console.log("hi");

