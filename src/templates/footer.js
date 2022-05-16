import logo from '../assets/images/logo.svg'

const footer = document.createElement('footer')

const divFooter = document.createElement('div')
divFooter.classList.add('footer')

divFooter.innerHTML = `
<div class="block block1">
  <div class="block__logo">
    <div class="block__logo__img">
      <img src="${logo}" alt="logo">
    </div>
    <div class="block__logo__name">
      ПКФ МетСервис-А
    </div>
  </div>
  <div class="block__right">
    © 2022, ПКФ МетСервис-А
  </div>
</div>
<div class="block block2">
  <div class="block__wrapper">
    <div class="block__wrapper__line">
      <a href="tel:+73432887972">+7 (343) 288 79 72</a>
    </div>
    <div class="block__wrapper__line">
      <a href="tel:+73432958586">+7 (343) 295 85 86</a>
    </div>
    <div class="block__wrapper__line">
      <a href="mailto:a131010@mail.ru">a131010@mail.ru</a>
    </div>
  </div>
</div>
<div class="block block3">
  <div class="block__wrapper">
    <div class="block__wrapper__line">
      <a href="#" class="block__wrapper__line__address">Юр. адрес: Свердловская область, г. Полевской, мк. Черемушки 18-3</a>
    </div>
    <div class="block__wrapper__line">
      <a href="#" class="block__wrapper__line__address">Факт. адрес: Свердловская область, г. Екатеринбург пер. Саранинский 9 офис 210</a>
    </div>
  </div>
</div>`
footer.append(divFooter)

export { footer }