// to use this, open Javascript Console in Chrome
// View > Developer Tools > Javascript Console 
// https://www.holiday-weather.com/sydney/averages/

const city = document.querySelector("#nav_breadcrumbs a:last-child").innerHTML

const monthTags = document.querySelectorAll("#chart-head-temperature tr:nth-child(2) td:nth-child(n+2)")

const months = [...monthTags].map(tag => parseFloat(tag.innerHTML, 10))

copy({ city, months })