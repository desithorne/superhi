// alert('hello love')

// personalize the pop up greeting
// first pick the h1 tag
// const headerTag = document.querySelector('h1')

// then change the text
// headerTag.innerHTML = 'Hello there'

// then change HTML to have a different background color
// headerTag.style.backgroundColor = "var(--secondary-blue)"

// headerTag.style.fontSize = "48px"

// let's pick all h1 tags on the page
// then let each tag have a bgcolor

const headerTags = document.querySelectorAll('h1')

// forEach loops over each tag and does something

// headerTags.forEach(h1 => {
//   const hue = 360 * Math.random()
//   h1.style.backgroundColor = "hsl(" + hue + ", 50%, 75%)"
// })

// take each tag, label it with the tag number - this is called the index
headerTags.forEach((h1, index) => {
  h1.innerHTML = 'this is tag number ' + index
})

// select rectangle tags
// change the width of the rectangles

const rectangles = document.querySelectorAll('rect')
const data = [19, 5, 36, 21, 38, 19, 21, 69, 12, 19, 21, 69, 19, 21, 38, 19, 21, 69, 12, 19, 21, 69]
// data[0] = ... 550
// data[1] = ..... 420
// data[2] = ..... 731

// rectangles.forEach((tag, i) => {
//   // tag.style.fill = '#45cdba'
//  // const width = 100 + 200 * i
//   const width = data[i]
//   tag.setAttribute('width', width, + 'px')
// })

const todaySvg = document.querySelector('svg')

// width = 24
// gap = 12
// max-height = 112

data.forEach((d, i) => {
  const rectangles = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  rectangles.setAttribute('x', i * 36)
  rectangles.setAttribute('y', 112 - d)
  rectangles.setAttribute('width', 24)
  rectangles.setAttribute('height', d)  
  todaySvg.append(rectangles)
})







