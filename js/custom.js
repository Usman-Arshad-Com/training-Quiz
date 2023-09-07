


const showPopup = document.querySelector('.showPopupButton');

const overlay = document.getElementById('overlay');

const popupContainer = document.getElementById('popupContainer');

const popupClose = document.getElementById('popupClose');


document.querySelectorAll(".showPopupButton").forEach((item) => {

item.addEventListener("click", (event) => {

event.preventDefault();

overlay.style.display = 'block';

popupContainer.style.display = 'block';

});

});



popupClose.addEventListener('click', function() {

overlay.style.display = 'none';

popupContainer.style.display = 'none';

});

