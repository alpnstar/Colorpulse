import "./../index.html";
import "./../scss/style.scss";
import "@babel/polyfill";

slider(document.querySelectorAll('.reviews__item'),
    1054,
    document.querySelector('.reviews__slider-buttons--right'),
    document.querySelector('.reviews__slider-buttons--left'))


function slider(sliderItem, wrapperWidthPX, buttonNext, buttonPrev) {
    let itemCount = sliderItem.length;
    let sliderStep = 0;

    buttonNext.onclick = () => {
        if (sliderStep != itemCount - 1) {
            sliderStep++;
            sliderItem.forEach(item => {
                item.style.transform = `translate(${-wrapperWidthPX * sliderStep}px)`;
            })
        }
    }
    buttonPrev.onclick = () => {
        if (sliderStep != 0) {
            sliderStep--;
            sliderItem.forEach(item => {
                item.style.transform = `translate(${-wrapperWidthPX * sliderStep}px)`;
            })
        }
    }
}

