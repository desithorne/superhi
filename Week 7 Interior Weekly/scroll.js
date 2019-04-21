// 1. when we scroll, we want to run a function
// 2. in the function, we want to figure out how far down the page we have scrolled
// 3. we want to display the pixels we've scrolled inside of our `progress` div

// how do we write a function that goes when we scroll?
// .document - refers to all html on a page

$(document).on('scroll', function() {
  // scrollTop tells you your position from the top in pixels

  var pixelsFromTop = $(document).scrollTop()

  // how do we get the pixelsFromTop variable to display on main page?
  // element = 'progress'
  // is there a scrollTop equivalent for percentage?

  // $('.progress').text(pixelsFromTop + ' pixels from top')

  // is this the type of command i can use in the task generator?
  // when we scroll more than 50 pixels from top, apply .hidden class

  if (pixelsFromTop > 50) {
    $('header').addClass('hidden')
  } else {
    $('header').removeClass('hidden')
  }

  // console.log(pixelsFromTop)

  // setting background color on body element at 600px

  if (pixelsFromTop < 600) {
    $('body').css('background-color', '#fff')
  } else if (pixelsFromTop < 1400) {
    $('body').css('background-color', '#a29c97')
  } else if (pixelsFromTop < 2200) {
    $('body').css('background-color', '#d9dfe4')
  } else if (pixelsFromTop < 3000) {
    $('body').css('background-color', '#fff0f0')
  } else {
    $('body').css('background-color', '#cdccc7')
  }

  // to discover the size of the document in pixels,
  // $(document).height()

  // to discover the size of the viewable window in pixels,
  // $(window).height()

  // include this or else the browser thinks you mean pixels
  $('.bar').css('width', 78 + '%')

  var documentHeight = $(document).height()
  var windowHeight = $(window).height()

  var difference = documentHeight - windowHeight

  var percentage = 100 * pixelsFromTop / difference

  $('.bar').css('width', percentage + '%')
})
