import './assets/style/style.scss'
import { render } from './templates/render.js'

import { template } from './templates/collector'

console.log(template);
const root = document.querySelector('#root')

root.append(...render)