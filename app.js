
const span = document.querySelector('span')
const popup = document.querySelector('.popup')

span.addEventListener('click', () => {
 popup.style.display = 'none'
})


let imgContainer = document.querySelectorAll('.img-container img')
let popupImg = document.querySelector('.popup img')
let imgName = document.querySelector('.img-name')

 imgContainer.forEach(image => {
  image.addEventListener('click', () => {
   popup.style.display = 'block'
   popupImg.src = image.getAttribute('src')
   let text = image.alt
   imgName.textContent = text
   console.log(imgName);
  })
 })

