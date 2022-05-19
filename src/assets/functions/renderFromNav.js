function newElement(tag, classes = '') {
  const el = document.createElement(tag)
  if (classes) el.classList.add(classes)
  return el
}


export const renderFromNav = (data, elem) => {
  const element = newElement('div', 'main__content__component')
  console.log(data);

  const title = newElement('div', 'main__content__component__title')
  title.innerText = data.title
  element.insertAdjacentElement('beforeend', title)

  const blockGOST = newElement('div', 'main__content__component__gost')
  for (const key in data.gost) {
    if (Object.hasOwnProperty.call(data.gost, key)) {
      const el = newElement('p')
      el.classList.add('gost')
      el.dataset.id = key
      el.innerText = data.gost[key]
      blockGOST.append(el) 
    }
  }
  element.insertAdjacentElement('beforeend', blockGOST)

  const desc = newElement('div', 'main__content__component__desc')
  if (data.desc.length) {
    data.desc.forEach(line => {
      const el = newElement('p')
      el.innerText = line
      desc.append(el) 
    })
  }
  element.insertAdjacentElement('beforeend', desc)
  
  const image = newElement('div', 'main__content__component__images')
  if (data.images.length) {
    data.images.forEach(line => {
      const el__ = newElement('div', 'main__content__component__images__item')
      const el = newElement('img')
      el.src = line.src
      el.alt = line.alt
      const el_ = newElement('p')
      el_.innerText = line.name
      el__.append(el, el_)
      image.append(el__) 
    })
  }
  element.insertAdjacentElement('beforeend', image)
  elem.innerHTML = ''
  elem.insertAdjacentElement('beforeend', element)

}