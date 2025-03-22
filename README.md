# Сайт с параллакс эффектом
Паралла́кс — изменение видимого положения объекта относительно удалённого фона в зависимости от положения наблюдателя. 

Простыми словами это смещение видимого положения объекта, рассматриваемого с двух разных точек. Чем дальше объект от наблюдателя, тем меньше его видимое положение меняется при перемещении наблюдателя.
## Как проверить
На сайте имеется 3 объекта участвующих в параллакс эффекте: облака, горы и человек. При движении курсора по этим объектам они по описаным правилам будут мещаться на определенное расстояние.

Также при прокрутке сайта ниже горы и человек должны немного смещаться вверх.
## Как редактировать
Файл normalaize.css отвечает за нормализацию css стилей а именно обнуляет начальные отступы и т.д.

В style.css прописаны основные стили для сайта.

В index.html распологается основной контент.

В script.js прописана логика для параллакс эффекта.

Обозначение переменных в script.js:

`forClouds, forMountains, forHuman`: Индекс насколько нужно смещать элемент

`animationSpeed`: Насколько быстро элемент сместится за 1 кадр

`positionX, positionY`: Определяет позицию курсора

`coordXpercent, coordYpercent`: Определяет позицию элементов

`distX, distY`: Определяет расстояние от курсора до элементов

`style.cssText = 'transform: translate(${positionX/forClouds}%, ${positionY/forClouds}%'`: С помощью css изменяет позицию элемента

`requestAnimationFrame(setParalaxAnimation)`: Необходимо для того чтобы анимация изменялась в зависимости от количества кадров в секунду

`parallaxSection.addEventListener("mousemove", function(event) {...})`: Добавляет обработчик события при движении мыши по блоку с элементами для параллакс эффекта

```js
let thresholdSets =  []
for (let i = 0; i <= 1; i+=0.005) {
    thresholdSets.push(i)
}

function setParallaxStyle(scrollTopPercent) {
    content.style.cssText = `transform: translate(0%, -${scrollTopPercent / 9}%)`
    mountains.parentElement.style.cssText = `transform: translate(0%, -${scrollTopPercent / 6}%)`
    people.parentElement.style.cssText = `transform: translate(0%, -${scrollTopPercent / 3}%)`
}

const callback = (entries, observer) => {
    const parallaxHeight = parallaxSection.offsetHeight;
    let scrollTopPercent = (window.pageYOffset / parallaxHeight) * 100
    setParallaxStyle(scrollTopPercent)
}
const observer = new IntersectionObserver(callback, {
    threshold: thresholdSets 
});
observer.observe(content)
```
Про эту часть кода можно почитать [здесь](https://doka.guide/js/intersection-observer/).
## Цель проекта
Код написан в образовательных целях в процессе занятий в школе "Третье место"