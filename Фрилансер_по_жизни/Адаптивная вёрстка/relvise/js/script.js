"use strict"

const slider = document.querySelector('#slider'); // нахожу элемент див в котором есть картинки , нахожу по айди 
const sliderItems = Array.from(slider.children); // найдя див нахожу его "детей"
const btnNext = document.querySelector('#next'); // нахожу кнопку по айди некст
const btnPrev = document.querySelector('#prev'); // тоже самое только по айди прев


sliderItems.forEach(function (slide, index) {

    //console.log(slide); - просто вывожу на консоль
    if (index !== 0) slide.classList.add('hidden');

    //Добавляем индексы через атрибут data.set.index
    slide.dataset.index = index;

    //Добавляем атрибут актив для первого активного слайда
    sliderItems[0].setAttribute('data-active', '');

    //click по слайдам
    slide.addEventListener('click', function () {
        //console.log('Next'); смотрю что работает листенер по клику

        slide.classList.add('hidden'); // добавляю класс который скрывает текущий слайд у него изначально мы специально не прописали класс теперь когда на него нажали его надо скрыть
        //console.log(+slide.dataset.index + 1); // пишу впереди + потому что надо 0 сделать числом
        slide.removeAttribute('data-active');

        //расчитываем индекс следующего слайда
        let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
        //находим следующий слайд
        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        //Отображаем след слайд
        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');

    })
})

btnNext.onclick = function () {
    console.log("next slide");
    showNextSlide('next');

}

btnPrev.onclick = function () {
    console.log("Prev slide");
    showNextSlide('prev');

}

function showNextSlide(direction) {

    //скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]');
    //console.log(currentSlide);
    const currentSlideIndex = +currentSlide.dataset.index;
    //console.log(currentSlideIndex);
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Расчитываем след индекс в зависимости от направления движения
    let nextSlideIndex;
    if (direction === 'next') {

        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;

    } else if (direction === 'prev') {

        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;

    }

    //показываем след слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');

}