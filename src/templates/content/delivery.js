import tk_kit from '../../assets/images/tk_logo/kit.svg'
import tk_express from '../../assets/images/tk_logo/express-auto.png'
import tk_dellin from '../../assets/images/tk_logo/dellin.png'
import tk_baikalsr from '../../assets/images/tk_logo/baikalsr.svg'
import tk_jde from '../../assets/images/tk_logo/jde.svg'
import { discussion } from '../block/discussion'

export const delivery = `
<div class="main__content__header">
    <h1>Доставка</h1>
</div>
<div class="main__content__description">
    <div class="tk">
        <p>Работаем с любыми транспортными компаниями:</p>
        <div class="tk__content">

            <div class="tk__content__item">
                <div class="tk__content__item__name">
                    <a href="https://tk-kit.com">
                        ООО “КИТ.ТК”
                    </a>
                </div>
                <div class="tk__content__item__calculate">
                    <a href="https://tk-kit.com/order">
                        <i class="fa fa-calculator fa-4" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="tk__content__item__image">
                    <a href="https://tk-kit.com">
                        <img src="${tk_kit}" alt="about" srcset=""> 
                    </a>
                </div>
            </div>

            <div class="tk__content__item">
                <div class="tk__content__item__name">
                    <a href="http://expressauto.ru/">
                        ТК «Экспресс-Авто»
                    </a>
                </div>
                <div class="tk__content__item__calculate">
                    <a href="http://expressauto.ru/autokalkulyator">
                        <i class="fa fa-calculator fa-4" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="tk__content__item__image">
                    <a href="http://expressauto.ru/">
                        <img src="${tk_express}" alt="about" srcset=""> 
                    </a>
                </div>
            </div>

            <div class="tk__content__item">
                <div class="tk__content__item__name">
                    <a href="https://www.dellin.ru/">
                        ГК «Деловые Линии»,
                    </a>
                </div>
                <div class="tk__content__item__calculate">
                    <a href="https://www.dellin.ru/">
                        <i class="fa fa-calculator fa-4" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="tk__content__item__image">
                    <a href="https://www.dellin.ru/">
                        <img src="${tk_dellin}" alt="about" srcset=""> 
                    </a>
                </div>
            </div>

            <div class="tk__content__item">
                <div class="tk__content__item__name">
                    <a href="https://www.baikalsr.ru/">
                        ТК «Байкал Сервис»
                    </a>
                </div>
                <div class="tk__content__item__calculate">
                    <a href="https://request.baikalsr.ru/calculator/">
                        <i class="fa fa-calculator fa-4" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="tk__content__item__image">
                    <a href="https://baikalsr.ru/">
                        <img src="${tk_baikalsr}" alt="about" srcset=""> 
                    </a>
                </div>
            </div>

            <div class="tk__content__item">
                <div class="tk__content__item__name">
                    <a href="https://www.jde.ru/">
                        ГК «ЖелДорЭкспедиция»
                    </a>
                </div>
                <div class="tk__content__item__calculate">
                    <a href="https://www.jde.ru/online/calculator.html">
                        <i class="fa fa-calculator fa-4" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="tk__content__item__image">
                    <a href="https://www.jde.ru/">
                        <img src="${tk_jde}" alt="about" srcset=""> 
                    </a>
                </div>
            </div>
        </div>
    </div>
    ${discussion}
    </div>
</div>
`