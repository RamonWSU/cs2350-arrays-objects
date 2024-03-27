//TODO - Your ES6 JavaScript code (if any) goes here
import "bootstrap"


import { images } from './images'

for (let i of images) {
    let i_thumb = document.getElementById('i' + i.id)
    i_thumb.innerHTML = `
    <img src="${i.url}" alt="${i.title}" class="img-thumbnail"/> 
    `

    i_thumb.onclick = function() {
        displayImage(i)
    }
}

let featured_image = document.querySelector(".featured")
function displayImage(images){
    featured_image.innerHTML = `
    <div class="card">
    <img src="${images.url}" class="card-img-top" alt="${images.title}">
    <div class="card-body">
    <h1 class="text-start">${images.title}</h1>
    <p class="text-start">${images.description}</p>
    </div>
  </div>
    `
}



