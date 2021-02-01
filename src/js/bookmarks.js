import getByDataJs from './getByDataJs'
import getAllByDataJs from './getAllByDataJs'

export default function bookmarks() {
  const cards = getAllByDataJs('card')

  cards.forEach(card => {
    const buttonToggle = getByDataJs('button-bookmark', card)

    buttonToggle.addEventListener('click', () => {
      buttonToggle.classList.toggle('active')
    })
  })
}
