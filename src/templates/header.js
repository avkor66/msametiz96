import logo from '../assets/images/logo.svg'

const head = document.createElement('header')

const divHeader = document.createElement('div')
divHeader.classList.add('header')

divHeader.innerHTML = `
<a href="/">
  <div class="header__logo">
    <div class="header__logo__img">
      <img src="${logo}" alt="logo">
    </div>
    <div class="header__logo__name">
      ПКФ МетСервис-А
    </div>
  </div>
</a>
<div class="header__order">
  <div class="header__order__tel">
    <span>
      + 7 (343) 288 79 72
    </span>
    <span>
      + 7 (343) 295 85 86
    </span>
  </div>
  <div class="header__order__btn">
    <button>ЗАКАЗАТЬ</button>
  </div>
</div>`
const nav = document.createElement('nav')
nav.classList.add('nav')

nav.innerHTML = `
<ul> 
  <li class="menu_header active" data-id="main">
    Главная
  </li>
  <li class="menu_header" data-id="products">
  Продукция
  </li>
  <li class="menu_header" data-id="services">
  Услуги
  </li>
  <li class="menu_header" data-id="equipment">
  Оборудование
  </li>
  <li class="menu_header" data-id="delivery">
  Доставка
  </li>
  <li class="menu_header" data-id="about">
    О компании
  </li>
  <li class="menu_header" data-id="contacts">
    Контакты
  </li>
</ul>`

head.append(divHeader, nav)

export { head }