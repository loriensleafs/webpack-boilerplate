const Component = (tag, text = null, id = null, className = null) => {
  const element = document.createElement(tag)
  if (id) element.classList.add(id)
  if (className) element.classList.add(className)

  element.textContent = text

  return element
}

export default Component
