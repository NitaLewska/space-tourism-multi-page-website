const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})

import data from './data.json' assert { type: 'json' };
console.log(data);

const buttonsDestination = document.querySelectorAll('.grid-container--destination>.tab-list>button')
const destinationHeading = document.querySelector('.destination-info h2')
const destinationDescription = document.querySelector('.destination-info h2 + p')
const destinationDistance = document.querySelector('.destination-info .destination--distance')
const destinationTime = document.querySelector('.destination-info .destination--time')
const destinationImages = document.querySelectorAll(".grid-container--destination>picture")

buttonsDestination.forEach(a => a.addEventListener('click', function() {
    buttonsDestination.forEach(b => b.ariaSelected = 'false')
    a.ariaSelected = 'true'
    let index = data.destinations.findIndex(p => p.name == a.innerHTML)
    destinationHeading.innerHTML = data.destinations[index].name
    destinationDescription.innerHTML = data.destinations[index].description
    destinationDistance.innerHTML = data.destinations[index].distance
    destinationTime.innerHTML = data.destinations[index].travel
    destinationImages.forEach(i => i.setAttribute('style', 'display:none'))
    let currentImage = document.querySelector(`.grid-container--destination>picture.${a.innerHTML.toLowerCase()}`)
    currentImage.setAttribute('style', 'display:block')
}))


const buttonsCrew = document.querySelectorAll('.grid-container--crew>.dot-indicators>button')
const crewHeading = document.querySelector('.crew-details h2')
const crewName = document.querySelector('.crew-details h2 + p')
const crewDescription = document.querySelector('.crew-details>p')
const crewImages = document.querySelectorAll(".grid-container--crew>picture")

console.log(buttonsCrew)

buttonsCrew.forEach(a => a.addEventListener('click', function() {
    buttonsCrew.forEach(b => b.ariaSelected = 'false')
    buttonsCrew.forEach(b => b.ariaSelected = 'false')
    a.ariaSelected = 'true'
    let index = data.crew.findIndex(p => p.role.toLowerCase() == a.innerText.slice(4))
    crewHeading.innerHTML = data.crew[index].role
    crewDescription.innerHTML = data.crew[index].bio
    crewName.innerHTML = data.crew[index].name
    crewImages.forEach(i => i.setAttribute('style', 'display:none'))
    let currentImage = document.querySelector(`.grid-container--crew>picture:nth-of-type(${index + 1})`)
    currentImage.setAttribute('style', 'display:block')
}))

const buttonsTech = document.querySelectorAll('.grid-container--technology>.number-indicators>button')
const techName = document.querySelector('.technology-details h2 + p')
const techDescription = document.querySelector('.technology-details>p')
const techImages = document.querySelectorAll(".grid-container--technology>picture")



buttonsTech.forEach(a => a.addEventListener('click', function() {
    buttonsTech.forEach(b => b.ariaSelected = 'false')
    buttonsTech.forEach(b => b.ariaSelected = 'false')
    a.ariaSelected = 'true'
    let index = a.innerHTML - 1
    techDescription.innerHTML = data.technology[index].description
    techName.innerHTML = data.technology[index].name
    techImages.forEach(i => i.setAttribute('style', 'display:none'))
    let currentImage = document.querySelector(`.grid-container--technology>picture:nth-of-type(${index + 1})`)
    currentImage.setAttribute('style', 'display:block')
}))

