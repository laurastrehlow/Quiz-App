console.log('Hello world')

const headline = document.querySelector('#headline')
const page1 = document.querySelector('[data-js=page1]')
const page2 = document.querySelector('[data-js=page2]')
const page3 = document.querySelector('[data-js=page3]')
const button1 = document.querySelector('[data-js=button1]')
const button2 = document.querySelector('[data-js=button2]')
const button3 = document.querySelector('[data-js=button3]')
const cards = document.querySelectorAll('[data-js="card"]')

const textArea1 = document.querySelector('[data-js=textarea1]')
const remaining1 = document.getElementById('remaining1')

const textArea2 = document.querySelector('[data-js=textarea2]')
const remaining2 = document.getElementById('remaining2')

const textArea3 = document.querySelector('[data-js=textarea3]')
const remaining3 = document.getElementById('remaining3')

const maxLength1 = textArea1.maxLength
const maxLength2 = textArea2.maxLength
const maxLength3 = textArea3.maxLength

function calculateRemaining() {
  const currentLength1 = textArea1.value.length
  remaining1.innerHTML = maxLength1 - currentLength1

  const currentLength2 = textArea2.value.length
  remaining2.innerHTML = maxLength2 - currentLength2

  const currentLength3 = textArea3.value.length
  remaining3.innerHTML = maxLength3 - currentLength3
}

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

cards.forEach(card => {
  const buttonToggle = card.querySelector('[data-js="button-bookmark"]')

  buttonToggle.addEventListener('click', () => {
    buttonToggle.classList.toggle('active')
  })
})

cards.forEach(card => {
  const button = card.querySelector('[data-js="button"]')
  const answer = card.querySelector('[data-js="answer"]')

  button.addEventListener('click', () => {
    answer.classList.toggle('hidden')
  })
})
