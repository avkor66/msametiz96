import './assets/style/style.scss'
import { render } from './templates/render.js'

import { Render } from './classes/Render'
import { template } from './templates/collector'
import { components } from './assets/data/component'

const root = document.querySelector('#root')
root.append(...render)

const pages = new Render(template, components)
pages.listenHeader()
pages.render('main')