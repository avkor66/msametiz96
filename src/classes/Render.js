
export class Render {
  constructor(template) {
    this.main = document.querySelector('#main')
    this.activPage = 'main'
    this.template = template
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
    this.main.innerHTML = data
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
  }
}