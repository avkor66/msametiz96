import { template } from '../templates/collector'


export class Render {
  constructor() {
    this.main = document.querySelector('#main')
  }


  render(template) {
    let data
    switch (template) {
      case 'about':
        data = template.about
        break;
      case 'contacts':
        data = template.contacts
        break;  
      case 'delivery':
        data = template.delivery
        break;
      case 'delivery':
        data = template.delivery
        break;
      
      default:
        break;
    }
    return data
  }
}