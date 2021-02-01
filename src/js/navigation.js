import getByDataJs from './getByDataJs'
import getAllByDataJs from './getAllByDataJs'

export default function navigation() {
  const pages = getAllByDataJs('page')
  const navButtons = getAllByDataJs('nav')

  navButtons.forEach(button => {
    const clickedButtonName = button.dataset.name // <button data-js="nav" data-name="home">Home</button>
    button.addEventListener('click', () => {
      pages.forEach(page => {
        const pageName = page.dataset.name // <section data-js="page" data-name="home">...</section>
        page.classList.toggle('hidden', clickedButtonName !== pageName)
      })
      navButtons.forEach(button => {
        button.classList.toggle(
          'active',
          clickedButtonName === button.dataset.name
        )
      })
    })
  })
}
