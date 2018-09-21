import Component from './components/Component'
import './style.scss'

const hello = Component('h1', 'Hello, Webpack!', 'demo', 'main-heading')
const root = document.getElementById('root')

root.appendChild(hello)
