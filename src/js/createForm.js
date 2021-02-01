import getByDataJs from './getByDataJs'
import getAllByDataJs from './getAllByDataJs'

export default function createForm() {
  const forms = getAllByDataJs('formElement')

  forms.forEach(formElement => {
    const textarea = getByDataJs('textarea', formElement)
    const remainingParagraph = getByDataJs('remaining', formElement)

    textarea.addEventListener('keyup', () => {
      const maxLength = textarea.maxLength
      const currentLength = textarea.value.length
      const remaining = maxLength - currentLength

      remainingParagraph.innerHTML = remaining + '/' + maxLength
    })
  })
}
