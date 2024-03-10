import TableCell from './TableCell.js'
import MyEl from './MyEl.js'

export default class TableRow extends MyEl {
  constructor (arrayOfContents, isHead = false) {
    super('tr')
    // this.el = document.createElement('tr')
    arrayOfContents.forEach(contentObj => {
      const cell = new TableCell(contentObj.label, contentObj.align, isHead)
      cell.render(this.el)
    })
  }
  // render (parent) {
  //   parent.appendChild(this.el)
  // }
  onMouseenter (callbackFn) {
    this.el.addEventListener('mouseenter', callbackFn)
  }
  onMouseleave (callbackFn) {
    this.el.addEventListener('mouseleave', callbackFn)
  }
}