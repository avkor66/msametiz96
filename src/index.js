import './assets/style/style.scss'
import { render } from './templates/render.js'

import { Render } from './classes/Render'
import { template } from './templates/collector'

const root = document.querySelector('#root')
root.append(...render)

const pages = new Render(template)
pages.listenHeader()
pages.render('main')