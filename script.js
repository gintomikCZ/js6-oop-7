import TableRow from './TableRow.js'
import quasidb from './quasidb.js'

const container = document.querySelector('.container')
const table = document.createElement('table')
const thead = document.createElement('thead')
const trhead = new TableRow([
  { label: 'jméno' },
  { label: 'město' },
  { label: 'psi', align: 'center' }
], true)
trhead.render(thead)

table.appendChild(thead)
table.classList.add('main-table')
const tbody = document.createElement('tbody')

quasidb.getData().then((data) => {
  data.forEach((rowObj, index) => {
    const ar = [
      { label: `${rowObj.first} ${rowObj.last}` },
      { label: rowObj.city },
      { label: rowObj.dogs.length, align: 'center' }
    ]
    const row = new TableRow(ar)
    row.el.setAttribute('id', 'row' + index)
    row.render(tbody)
    row.onMouseenter(() => {

      // pokud už nějaká tabulka vnořená existuje, tak to neuděláme
      // if (document.querySelector('tr table')) {
      //   return
      // }

      const innerTable = document.createElement('table')
      const innerTbody = document.createElement('tbody')
      innerTable.classList.add('inner-table', 'hidden')
      rowObj.dogs.forEach(dogObj => {
        const innerRow = new TableRow([
          { label: dogObj.name },
          { label: dogObj.breed }
        ])
        innerRow.render(innerTbody)
      })
      innerTable.appendChild(innerTbody)
      innerTable.classList.add('pos-absolute', 'position-right')
      row.el.appendChild(innerTable)

      const rect = innerTable.getBoundingClientRect()
      const mainTable = document.querySelector('.main-table')
      const mainRect = mainTable.getBoundingClientRect()
      if (rect.right > window.innerWidth) {
        const left = (mainRect.width - rect.width) / 2
        innerTable.style.left = left + 'px'
      }

      if (rect.bottom > window.innerHeight) {
        const top = -rect.height + 10
        innerTable.style.top = top + 'px'
      }
      innerTable.classList.remove('hidden')
    })

    row.onMouseleave(() => {
      // vybrat tu malou tabulku
      // const innerTable = document.querySelector('tr table')
      const innerTable = document.querySelector('#row' + index + ' table')
      if (!innerTable) {
        return
      }
      innerTable.classList.add('hidden')

      // až potom, co skončí transition, tak udělat násl. řádek
      // setTimeout(() => {
      //     row.el.removeChild(innerTable)
      // }, 2000)
      innerTable.addEventListener('transitionend', (e) => {
        row.el.removeChild(innerTable)
      })

      // řádek ať ji removne
    })

  })
  table.appendChild(tbody)
})
container.appendChild(table)


// má element scrollbar ????


// if (el.clientHeight < el.scrollHeight)  true znamená že content se nevejde do elementu

/*

el.getBoundingClientRect()
el.clientWidth (neobsahuje border)
el.offsetWidth (obsahuje border)
el.scrollWidth (znamená celou velikost kontentu, i když se nevejde)
analogicky pro Height místo Width

*/

