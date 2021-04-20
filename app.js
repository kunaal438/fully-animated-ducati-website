const lines = [...document.querySelectorAll('.line')];
const logo = document.querySelector('.logo');
const container = document.querySelector('.container');
const colorBtn = [...document.querySelectorAll('.colors div')];
const img = document.querySelector('.bike');

lines.forEach(item => {
    setTimeout(() => {
        item.style.animation = `rotate-back 1s forwards 1`;
    }, 1500);

    setTimeout(() => {
        item.style.animation = `slide-left 1s forwards 1`;
    }, 3500);
})

setTimeout(() => {
    logo.style.animation = `logo-placement 1s forwards 1`;
}, 2500);

setTimeout(() => {
    container.style.display = 'flex';
}, 5500);

colorBtn.forEach(item => {
    item.addEventListener('click', () => {
        if(!img.src.includes(item.className)){
            img.style.animation = `bike-out .5s forwards 1`;

            setTimeout(() => {
                img.src = `img/${item.className}.png`;
                img.style.animation = `bike-in .5s forwards 1`;
            }, 550);
        }
    })
})