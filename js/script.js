/*Функция для работоспособности кнопок */
function Default(){
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  });
}


/*Слайдер ------------------------------------------------------------------------------ */
  /* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, при запуске страницы: */

function slid(n){
  showSlides(slideIndex);
}

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}
/*!Слайдер ------------------------------------------------------------------------------ */

/*Бургер-меню */
document.addEventListener("DOMContentLoaded", function(){
  let burger=this.getElementById("burger-menu");
  let bodyBM=this.getElementById('bodyBM')
  let BMoverlay=this.getElementById('BMoverlay');
  burger.addEventListener('click', function(){
    burger.classList.toggle('open');/*Изменяем состояния открыть/закрыть у кнопки меню*/
    bodyBM.classList.toggle('active');/*Изменяем состояния открыть/закрыть у списка меню*/
  })
  BMoverlay.addEventListener('click', function(){
    burger.classList.toggle('open');
    bodyBM.classList.toggle('active');
  })
})
/*!Бургер-меню*/


/*Валидация email */
function validate() {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var address = document.getElementById('email');
  if(reg.test(address.value) == false) {
    if(address.value == ""){
      alert('Заполните поле!')
    }
    else{
     alert('Введите корректный e-mail');
     address.value = "";
     return false;
    }
  }
  else{
      alert('Вы подписались на рассылку!')
      address.value = "";
  }
}
/*!Валидация email */


/*Окно поиска */
document.addEventListener("DOMContentLoaded", function(){
  let btnSearch=this.getElementById('btnSearch')
  let searchPlace=this.getElementById('searchPlace');
  btnSearch.addEventListener('click', function(){
    searchPlace.classList.toggle('SPactive');/*Изменяем состояния открыть/закрыть у поля поиска*/
    searchPlace.value = "";
  })
})
/*!Окно поиска*/


/*Аккордеон */
class ItcAccordion {
  constructor(target, config) {
    this._el = typeof target === 'string' ? document.querySelector(target) : target;
    const defaultConfig = {
      alwaysOpen: true,
      duration: 350
    };
    this._config = Object.assign(defaultConfig, config);
    this.addEventListener();
  }
  addEventListener() {
    this._el.addEventListener('click', (e) => {
      const elHeader = e.target.closest('.accordion__header');
      if (!elHeader) {
        return;
      }
      if (!this._config.alwaysOpen) {
        const elOpenItem = this._el.querySelector('.accordion__item_show');
        if (elOpenItem) {
          elOpenItem !== elHeader.parentElement ? this.toggle(elOpenItem) : null;
        }
      }
      this.toggle(elHeader.parentElement);
    });
  }
  show(el) {
    const elBody = el.querySelector('.accordion__body');
    if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
      return;
    }
    elBody.style['display'] = 'block';
    const height = elBody.offsetHeight;
    elBody.style['height'] = 0;
    elBody.style['overflow'] = 'hidden';
    elBody.style['transition'] = `height ${this._config.duration}ms ease`;
    elBody.classList.add('collapsing');
    el.classList.add('accordion__item_slidedown');
    elBody.offsetHeight;
    elBody.style['height'] = `${height}px`;
    window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      el.classList.remove('accordion__item_slidedown');
      elBody.classList.add('collapse');
      el.classList.add('accordion__item_show');
      elBody.style['display'] = '';
      elBody.style['height'] = '';
      elBody.style['transition'] = '';
      elBody.style['overflow'] = '';
    }, this._config.duration);
  }
  hide(el) {
    const elBody = el.querySelector('.accordion__body');
    if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
      return;
    }
    elBody.style['height'] = `${elBody.offsetHeight}px`;
    elBody.offsetHeight;
    elBody.style['display'] = 'block';
    elBody.style['height'] = 0;
    elBody.style['overflow'] = 'hidden';
    elBody.style['transition'] = `height ${this._config.duration}ms ease`;
    elBody.classList.remove('collapse');
    el.classList.remove('accordion__item_show');
    elBody.classList.add('collapsing');
    window.setTimeout(() => {
      elBody.classList.remove('collapsing');
      elBody.classList.add('collapse');
      elBody.style['display'] = '';
      elBody.style['height'] = '';
      elBody.style['transition'] = '';
      elBody.style['overflow'] = '';
    }, this._config.duration);
  }
  toggle(el) {
    el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
  }
}
/*!Аккордеон */


/*Реклама(закрыть) */
document.addEventListener("DOMContentLoaded", function(){
  let close = this.getElementById('close');
  let ad = this.getElementById('sideroll');
  close.addEventListener('click', function(){
    ad.classList.toggle('ADdisactive');/*Изменяем состояния открыть/закрыть рекламы*/
    setTimeout(() => ad.classList.toggle('ADdisactive'), 10000);/*Показать рекламу через промежуток времени */
  })
})