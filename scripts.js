document.addEventListener("DOMContentLoaded", () => {
    let parallaxSection = document.querySelector('.parallax')
    if (parallaxSection) {
        let clouds = document.querySelector('.images_clouds')
        let mountains = document.querySelector('.images_mountains')
        let people = document.querySelector('.images_human')
    
        let forClouds = 40
        let forMountains = 20
        let forHuman = 10
        let animationSpeed = 0.05
        let positionX = 0
        let positionY = 0
        let coordXpercent = 0
        let coordYpercent = 0
    
        function setParalaxAnimation() {
            let distX = coordXpercent - positionX
            let distY = coordYpercent - positionY
            positionX = positionX + distX * animationSpeed
            positionY = positionY + distY * animationSpeed
    
            clouds.style.cssText = `transform: translate(${positionX/forClouds}%, ${positionY/forClouds}%`
            mountains.style.cssText = `transform: translate(${positionX/forMountains}%, ${positionY/forMountains}%`
            people.style.cssText = `transform: translate(${positionX/forHuman}%, ${positionY/forHuman}%`
            requestAnimationFrame(setParalaxAnimation)
        }
        setParalaxAnimation()
    
        parallaxSection.addEventListener("mousemove", function(event) {
            const parallaxWidth = parallaxSection.offsetWidth;
            const parallaxHeight = parallaxSection.offsetHeight;
            let x = event.pageX
            let y = event.pageY
            let coordX = x - parallaxWidth / 2
            let coordY = y - parallaxHeight / 2
            coordXpercent = coordX / parallaxWidth * 100
            coordYpercent = coordY / parallaxHeight * 100
        })
    }
})
