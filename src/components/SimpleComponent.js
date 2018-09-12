const SimpleComponent = (tag, text = null) => {
  const element = document.createElement(tag)
  element.textContent = text

  return element
}

export default SimpleComponent
