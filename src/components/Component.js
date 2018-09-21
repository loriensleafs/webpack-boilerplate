const Component = (tag, text = null, id = null, className = null) => {
  const element = document.createElement(tag)
  if (id) element.setAttribute('id', id)
  if (className) element.classList.add(className)

  element.textContent = text

  return element
}

export default Component
