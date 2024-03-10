import MyEl from './MyEl.js'

export default class TableCell extends MyEl {

  constructor (label, align = 'left', isHeader = false) {
    super(isHeader ? 'th' : 'td')
    // if (isHeader) {
    //   this.el = document.createElement('th')
    // } else {
    //   this.el = document.createElement('td')
    // }
    // this.el = document.createElement(isHeader ? 'th' : 'td')
    this.el.textContent = label
    this.el.classList.add('text-' + align)
  }

}


// const th = new TableCell('ahoj')
// th.render(parent)
// new TableCell('čau', true)