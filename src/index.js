import Component from './components/Component'
import './primitive.scss'

const hello = Component('h1', 'Hello, Primitive!')
const root = document.getElementById('root')

root.appendChild(hello)
