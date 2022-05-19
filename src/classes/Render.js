import {renderFromNav} from '../assets/functions/renderFromNav'
import {discussion} from '../templates/block/discussion'


export class Render {
  constructor(template, components) {
    this.main = document.querySelector('#main')
    this.activPage = 'main'
    this.template = template
    this.listenerNav = false
    this.components = components
  }

  render(pages) {
    let data
    switch (pages) {
      case 'about':
        data = this.template.about
        break;
      case 'contacts':
        data = this.template.contacts
        break;  
      case 'delivery':
        data = this.template.delivery
        break;
      case 'equipment':
        data = this.template.equipment
        break;
      case 'products':
        data = this.template.products
        break;
      case 'services':
        data = this.template.services
        break;
      default:
        data = this.template.main
        break;
    }
    if (data instanceof HTMLDivElement) {
      this.main.insertAdjacentElement('afterbegin', data)
    } else {
      this.main.innerHTML = data
    }
    document.querySelectorAll('.nav_menu_item').forEach(li => li.classList.remove('active'))
    this.activPage = pages
  }
  listenHeader() {
    const menuHerader = document.querySelectorAll('.menu_header')
    menuHerader.forEach(line => {
      line.addEventListener('click', event => {
        const page = event.target.dataset.id
        menuHerader.forEach(lines => {lines.classList.remove('active')})
        if (this.activPage !== page) {
          this.render(page)
          event.target.classList.add('active')
          this.activPage = page
        }
        
      })
    })
    if(!this.listenerNav) {
      this.listenNav()
    }
  }
  listenNav() {
    const nav = document.querySelectorAll('.nav_menu_item')
    const menuHerader = document.querySelectorAll('.menu_header')
    nav.forEach(line => {
      line.addEventListener('click', event => {
        this.renderNav(event.target.dataset.id);
        nav.forEach(li => li.classList.remove('active'))
        event.target.classList.add('active')
        menuHerader.forEach(lines => {lines.classList.remove('active')})
      })
    })
  }
  renderNav(pages) {
    renderFromNav(this.components[pages], this.main)
    this.main.insertAdjacentHTML('beforeend', discussion)
    this.activPage = pages
    this.listenerGost()
  }
  listenerGost() {
    const gost = document.querySelectorAll('.gost') 
    gost.forEach(line => {
      line.addEventListener('click', ev => {
        renderFromNav(ev.target.dataset.id) 
      })
    })
  }
}