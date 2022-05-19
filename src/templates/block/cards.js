import { productCard } from "../../assets/data/product.js";

function createCard(params) {
  const newCard = document.createElement('div')
  newCard.classList.add('main__content__prod__cards__item')
  
  const newCardImg = document.createElement('img')
  newCardImg.src = params.src
  newCardImg.alt = params.title

  const newCardDesc = document.createElement('span')
  newCardDesc.innerText = params.desc
  newCard.insertAdjacentElement('afterbegin', newCardDesc)
  newCard.insertAdjacentElement('afterbegin', newCardImg)
  return newCard
}

export const tempCards = productCard.map(line => {
  return createCard(line)
})

const tempCard_ = `
<div class="main__content__cards__item">
  <img src="assets/images/bolt-ankern.png" alt="" srcset="">
  <span>
    Болты фундаментные анкерные
    (анкера) от М12 до М140 ГОСТ 24379.1-80
  </span>
</div>
<div class="main__content__cards__item">
  <img src="assets/images/anker-blok.png" alt="" srcset="">
  <span>
      Блоки фундаментные

      М12 до М140
      
      ГОСТ 24379.1-80
  </span>
</div>
<div class="main__content__cards__item">
  <img src="assets/images/gayka_1.png" alt="" srcset="">
  <span>
      Гайки - от М6 до М48

      ГОСТ 5915-70, 5916-70, 22354-77
  </span>
</div>
<div class="main__content__cards__item">
  <img src="assets/images/zaklad2.png" alt="" srcset="">
  <span>
      Закладные изделия МН, ЗД.

      Серия 1.400-15 v1.
      
      Серия 3.407.9-146
  </span>
</div>
<div class="main__content__cards__item">
  <img src="assets/images/u-xomut.png" alt="" srcset="">
  <span>
      Хомуты U-образные
  </span>
</div>
<div class="main__content__cards__item">
  <img src="assets/images/setka-rabic.png" alt="" srcset="">
  <span>
      Сетка рабица
  </span>
</div>
<div class="main__content__cards__item">
  <img src="assets/images/chpilki.png" alt="" srcset="">
  <span>
      Шпильки ГОСТ 9066-75, 22032-76,  

      22042-76 ГОСТ 24379.1-80
  </span>
</div>
<div class="main__content__cards__item">
    <img src="assets/images/osi2.png" alt="" srcset="">
    <span>
        Оси ГОСТ 9650-80
    </span>
</div>
<div class="main__content__cards__item">
    <img src="assets/images/petlja-garajnaia.png" alt="" srcset="">
    <span>
        Петли гаражные, (шарниры)
    </span>
</div>
<div class="main__content__cards__item">
    <img src="assets/images/futer-bolt.png" alt="" srcset="">
    <span>
        Болты футеровочные

        М30, М36, М42, М48
        
        по чертежам заказчика
    </span>
</div>
<div class="main__content__cards__item">
    <img src="assets/images/anker-plita1.png" alt="" srcset="">
    <span>
        Анкерные плиты, шайбы

    ГОСТ 24379.1-80
    </span>
</div>
<div class="main__content__cards__item">
    <img src="assets/images/chtucer2.png" alt="" srcset="">
    <span>
        Штуцера, бобышки,

        пробки (стальные, латунные,
        
        нержавеющие)
    </span>
</div>
<div class="main__content__cards__item">
    <img src="assets/images/visokoproch1.png" alt="" srcset="">
    <span>
        Крепеж - высокопрочный,

        оцинкованный и нержавеющий 
    </span>
</div>
<div class="main__content__cards__item">
    <img src="assets/images/chaybi.png" alt="" srcset="">
    <span>
        Шайбы - от Ø6 до Ø56

      (плоская ГОСТ 11371-78,
      пружинная ГОСТ 6402-70)
      М12 до М140 ГОСТ 24379.1-80
    </span>
</div>
<div class="main__content__cards__item">
    <img src="assets/images/stoporn.png" alt="" srcset="">
    <span>
        Стопорные кольца -

        ГОСТ 13942-86, 13943-86
    </span>
</div>
<div class="main__content__cards__item">
    <img src="assets/images/samorezi.png" alt="" srcset="">
    <span>
        Саморезы, шурупы, гвозди,

        строительные -

      ГОСТ 4028-63
    </span>
</div>
<div class="main__content__cards__item">
    <img src="assets/images/setka-armat.png" alt="" srcset="">
    <span>
        Сетка арматурная (Кладочная)  
        ГОСТ 23279-85
    </span>
</div>
<div class="main__content__cards__item">
    <img src="assets/images/skoby.png" alt="" srcset="">
    <span>
        Скобы строительные,
        штыри Ø6, Ø8, Ø10, Ø12
    </span>
</div>`