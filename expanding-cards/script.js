const card = document.querySelectorAll(".card");

// Function to remove all active classes
function removeOtherActive() {
  card.forEach(item => {
    item.classList.remove('active');
  })
}

// Eventlistener to use the fucntion removeOtherActive + add Active to current item
card.forEach(item => {
  item.addEventListener('click', () =>{
    removeOtherActive();
    addActiveClass(item);
  })
}) 

// Function to add active to the clicked item
function addActiveClass(item) {
    item.classList.add('active');
}