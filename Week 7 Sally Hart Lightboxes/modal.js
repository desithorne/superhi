// c;ick an image, show the modal
// grab the image that the visitor clicked on and show in the modal
// click the close button, close the modal

$('.photos a').on('click', function() {
  
  var currentImage = $(this).html()
  
  
  $('.modal-content').html(currentImage)
  $('.modal').fadeIn(500)
  return false
  // blocks the browser's default behaviour
})

$('.modal-close, .modal-background').on('click', function() {
  $('.modal').fadeOut(500)
  return false
})

