
const section = document.createElement('section')
section.classList.add('main')
section.innerHTML = `
  <div class="main__nav">
    <ul>
      <li class="nav_menu_item" data-id="bolts">Болты</li>
      <li class="nav_menu_item" data-id="screws">Винты</li>
      <li class="nav_menu_item" data-id="nuts">Гайки</li>
      <li class="nav_menu_item" data-id="studs">Шпильки</li>
      <li class="nav_menu_item" data-id="washers">Шайбы</li>
      <li class="nav_menu_item" data-id="anchors">Анкера</li>
      <li class="nav_menu_item" data-id="blocks">Блоки</li>
      <li class="nav_menu_item" data-id="nipple">Штуцера</li>
      <li class="nav_menu_item" data-id="bosses">Бобышки</li>
      <li class="nav_menu_item" data-id="hinges">Шарниры</li>
      <li class="nav_menu_item" data-id="axis">Оси</li>
      <li class="nav_menu_item" data-id="embedded_parts">Закладные детали</li>
      <li class="nav_menu_item" data-id="fastening">Крепеж</li>
      <li class="nav_menu_item" data-id="supports">Опоры</li>
      <li class="nav_menu_item" data-id="SDW_container">Контейнер ТБО</li>
      <li class="nav_menu_item" data-id="anchoring_plates">Анкерные плиты</li>
      <li class="nav_menu_item" data-id="fences">Ограждения</li>
      <li class="nav_menu_item" data-id="sizes">Ростовки</li>
      <li class="nav_menu_item" data-id="flanges">Фланцы</li>
    </ul>
  </div>
  <div class="main__content" id="main"></div>`
export { section }