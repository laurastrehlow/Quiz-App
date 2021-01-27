console.log('Hello world')

const headline = document.querySelector('#headline')
const page1 = document.querySelector('[data-js=page1]')
const page2 = document.querySelector('[data-js=page2]')
const page3 = document.querySelector('[data-js=page3]')
const button1 = document.querySelector('[data-js=button1]')
const button2 = document.querySelector('[data-js=button2]')
const button3 = document.querySelector('[data-js=button3]')

button1.addEventListener('click', () => {
  page1.classList.remove('hidden')
  page2.classList.add('hidden')
  page3.classList.add('hidden')
  button1.classList.add('active')
  button2.classList.remove('active')
  button3.classList.remove('active')
  headline.innerHTML = 'Quiz.ly'
})

button2.addEventListener('click', () => {
  page1.classList.add('hidden')
  page2.classList.remove('hidden')
  page3.classList.add('hidden')
  button1.classList.remove('active')
  button2.classList.add('active')
  button3.classList.remove('active')
  headline.innerHTML = 'Bookmarks'
})

button3.addEventListener('click', () => {
  page1.classList.add('hidden')
  page2.classList.add('hidden')
  page3.classList.remove('hidden')
  button1.classList.remove('active')
  button2.classList.remove('active')
  button3.classList.add('active')
  headline.innerHTML = 'Create'
})
