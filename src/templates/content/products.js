import { tempCards } from "../block/cards.js"

const products = document.createElement('div')
products.classList.add('main__content__prod')

const cards = document.createElement('div')
cards.classList.add('main__content__prod__cards')
cards.append(...tempCards)

const titleProd = document.createElement('div')
titleProd.classList.add('main__content__prod__header')
titleProd.innerHTML = '<h1>Продукция</h1>'

const titleCardProd = document.createElement('div')
titleCardProd.classList.add('main__content__prod__header')
titleCardProd.innerHTML = '<h1>Каталог продукции</h1>'

const tempDesc = `
<p>Изготавливаем и реализуем более 10 000 изделий из металлов и сплавов: крепежи, закладные детали, штуцеры, фундаментные болты и металлические элементы фундаментов(ростверки, наголовники), фермы для промышленных и гражданских зданий, металлические лестницы, площадки, ограждения, шарниры, другие метизы любых размеров и форм.</p>
<p>Выпускаем как стандартные модели, так и индивидуальные изделия, выполненные по эскизам заказчика (ст. 3, 09Г2С, 20, 35, 40Х и др.).</p>
`

const descriptionProd = document.createElement('div')
descriptionProd.classList.add('main__content__prod__description')
descriptionProd.innerHTML = tempDesc



const tempFooterProd = `     
<div class="main__content__prod__footer">

</div>
`
products.insertAdjacentElement('beforeend', titleProd)
products.insertAdjacentElement('beforeend', descriptionProd)

products.insertAdjacentElement('beforeend', titleCardProd)
products.insertAdjacentElement('beforeend', cards)
products.insertAdjacentHTML('beforeend', tempFooterProd)

export { products }
