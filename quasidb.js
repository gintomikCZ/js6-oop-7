import data from './data.js'

// konfigurace připojení k serveru (API)


export default {

  getData() {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(data)
      }, 500)
    })
  },
  post(body) {
    // ukládá nový záznam do db
  },
  put(body) {
    // edituje existující záznam
  },
  delete(id) {
    // maže existující záznam
  }
}


// SQL - řádková struktura
// NoSQL - stromová

/*
emloyees
1 Franta manager 12
2 Karel driver 12

companies
12 AbCs.r.o. Brno

___________________

companies

name: ABC s.r.o.
city: Brno
employees: [
  { name: Franta, position: driver },
  { name: Karel, position, manager }
]

*/
