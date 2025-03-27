document.addEventListener("DOMContentLoaded", () => {
    const parallax = document.querySelector('.parallax');

    if (parallax) {

        const content = document.querySelector('.parallax__content');
        const clouds = document.querySelector('.images__clouds');
        const mountains = document.querySelector('.images__mountains');
        const human = document.querySelector('.images__human');

        const forClouds = 40;
        const forMountains = 20;
        const forHuman = 10;

        const animationSpeed = 0.05;

        let positionX = 0;
        let positionY = 0;
        let coordXpercent = 0;
        let coordYpercent = 0;
    
        function setParalaxAnimation() {
            const distX = coordXpercent - positionX;
            const distY = coordYpercent - positionY;

            positionX = positionX + distX * animationSpeed;
            positionY = positionY + distY * animationSpeed;
    
            clouds.style.cssText = `transform: translate(${positionX/forClouds}%, ${positionY/forClouds}%);`;
            mountains.style.cssText = `transform: translate(${positionX/forMountains}%, ${positionY/forMountains}%);`;
            human.style.cssText = `transform: translate(${positionX/forHuman}%, ${positionY/forHuman}%);`;
            requestAnimationFrame(setParalaxAnimation);
        }
        setParalaxAnimation();

        parallax.addEventListener("mousemove", function(event) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = event.pageX - parallaxWidth / 2;
            const coordY = event.pageY - parallaxHeight / 2;

            coordXpercent = coordX / parallaxWidth * 100;
            coordYpercent = coordY / parallaxHeight * 100;
        })

        let thresholdSets =  [];
        for (let i = 0; i <= 1.0; i+=0.005) {
            thresholdSets.push(i);
        }

        function setParallaxStyle(scrollTopPercent) {
            content.style.cssText = `transform: translate(0%, -${scrollTopPercent / 9}%);`;
            mountains.parentElement.style.cssText = `transform: translate(0%, -${scrollTopPercent / 6}%);`;
            human.parentElement.style.cssText = `transform: translate(0%, -${scrollTopPercent / 3}%);`;
        }

        const callback = (entries, observer) => {
            const scrollTopPercent = (window.pageYOffset / parallax.offsetHeight) * 100;
            setParallaxStyle(scrollTopPercent);
        }
        const observer = new IntersectionObserver(callback, {
            threshold: thresholdSets 
        });
        observer.observe(document.querySelector('.content'))
    }
})
