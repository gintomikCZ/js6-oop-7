/*
table / ul

jméno           město   psi
Franta  Horák   Praha   2

<table>
  <thead>
    <tr>
      <th>jméno</th>
      ...
      ...
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Franta Novák</td>
      <td>Brno</td>
      <td>1</td>
    </tr>
    <tr>
      <td>Franta Novák</td>
      <td>Brno</td>
      <td>1</td>
    </tr>
  </tbody>
</table>

*/
import TableRow from './TableRow.js'
import quasidb from './quasidb.js'
const container = document.querySelector('.container')

const table = document.createElement('table')
const thead = document.createElement('thead')
// const trhead = document.createElement('tr')
// const labels = ['jméno', 'město', 'psi']
// labels.forEach(label => {
//   // const th = document.createElement('th')
//   // th.textContent = label
//   // trhead.appendChild(th)
//   const th = new TableCell(label, true)
//   th.render(trhead)
// })
// kód pro naplnění trhead
const trhead = new TableRow(['jméno', 'město', 'psi'], true)
/*
    <tr>
      <th>jméno</th>
      ...
      ...
    </tr>
*/
trhead.render(thead)

table.appendChild(thead)
// kód pro vytvoření tbody
const tbody = document.createElement('tbody')

const mySuperPromise = quasidb.getData()
mySuperPromise.then((data) => {

  // můžu pracovat s data
  data.forEach(rowObj => {
    // vytvořit řádek tabulky
    const ar = [`${rowObj.first} ${rowObj.last}`, rowObj.city, rowObj.dogs.length]
    const row = new TableRow(ar)
    row.render(tbody)
    // strčit ho do tbody
  })
  table.appendChild(tbody)
})

// const extraRow = new TableRow(['jablko', 'hruška', 'švestka'])
// extraRow.render(tbody)


container.appendChild(table)

const row = new TableRow(['jméno', 'město', 'psi'], true)