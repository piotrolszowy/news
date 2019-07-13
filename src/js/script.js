function showModal() {
  $(".modal-overlay").addClass("modal-overlay--active");
  $(".modal").addClass("modal--active");
}

function hideModal() {
  $(".modal-overlay").removeClass("modal-overlay--active");
  $(".modal").removeClass("modal--active");
}


// --- Add to Favorites

$(".article__button--fav").on("click", function(event){
  event.preventDefault();
  alert("Dodano do ulubionych");
});


// --- Show Modal

$(".article__button--comment").on("click", function(event){
  event.preventDefault();
  showModal();
});


// --- Hide Modal

$(".modal__close").on("click", function(){
  hideModal();
});

$(".modal-overlay").on("click", function(){
  hideModal();
});

$(document).keyup(function(event) {
  if (event.keyCode === 27) hideModal();
});
