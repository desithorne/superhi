setInterval(function() {
  console.log('hello squad')
}, 3000)

var currentSlide = 0

var totalSlides = $('.holder div').length
// .length tells us how many items are in the selected object

var moveSlides = function(slide) {
  
  
}

var nextSlide = function() {
  currentSlide = currentSlide + 1

  if (currentSlide >= totalSlides) currentSlide = 0

  var leftPosition = -currentSlide * 100 + 'vw'

  $('.holder').css('left', leftPosition)

  var activeSlide = currentSlide + 1
  $('.steps').text(activeSlide + ' / ' + totalSlides)
}

var previousSlide = function() {
  currentSlide = currentSlide - 1
  
  if (currentSlide < 0)  (currentSlide = totalSlides - 1)
    
    
  var leftPosition = -currentSlide * 100 + 'vw'
  $('.holder').css('left', leftPosition)

  var activeSlide = currentSlide + 1
  $('.steps').text(activeSlide + ' / ' + totalSlides)
}

var autoSlide = setInterval(function() {
  nextSlide()
}, 3000)

// arrays start at 0, not 1
// on loading page, always display image 1
// increase currentSlide value as a vw unit
// input that vw into the css

$('.next').on('click', function() {
  clearInterval(autoSlide)
  nextSlide()
})

$('.prev').on('click', function() {
  clearInterval(autoSlide)
  previousSlide()
})

// displaying slides
// currentSlide / totalSlides
var activeSlide = currentSlide + 1
$('.steps').text(activeSlide + ' / ' + totalSlides)




$('body').on('keydown', function(event) {
  
  var keyCode = event.keyCode
  
  if (keyCode == 37) {
     clearInterval(autoSlide)
      previousSlide ()
  }
  
  if (keyCode == 39) {
    clearInterval(autoSlide)
    nextSlide()
  }
  
})
