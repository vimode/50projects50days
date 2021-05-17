const circles = document.querySelectorAll(".circle")

const prev = document.querySelector("#prev")
const next = document.querySelector("#next")

const actives = document.querySelectorAll(".active")

let activeCircle = 1

// Next button
next.addEventListener('click', () => {
  activeCircle++

  if(activeCircle > circles.length) {
    activeCircle = circles.length
    }

  fillItems()
})

// Previous button
prev.addEventListener('click', ()=> {
  activeCircle-- 
  if(activeCircle <1) {
    activeCircle = 1;
  }

  fillItems()
})

function fillItems() {
  
  // Fill circles and lines
  circles.forEach((item, index) => {
  if(index < activeCircle) {
    item.classList.add('active')
  } else {
    item.classList.remove('active')
  }
})

  // Activate or deactive buttons
  if(activeCircle == circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }

  if(activeCircle == 1) {
    prev.disabled = true;
  }else {
    prev.disabled = false;
  }

}