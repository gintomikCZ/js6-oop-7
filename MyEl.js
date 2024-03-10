export default class MyEl {

  constructor (tagName) {
    this.el = document.createElement(tagName)
  }

  render (parent) {
    parent.appendChild(this.el)
  }
}