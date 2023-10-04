// ## Calcolo del prezzo del biglietto del treno


// # chiedere all'utente il numero di km che vuole percorrere 

//   - creare un prompt che chieda all'utente i km

//   - salvare la risposta dentro una variabile

const kmNumber = parseInt(prompt("Quanti km devi percorrere?"));

// # chiedere all'utente l'età

//   - creare un prompt che chieda all'utente l'età

//   - salvare la risposta dentro una variabile

const age = parseInt(prompt("Quanti anni hai?"));

// # in base alle risposte calcolare il prezzo del biglietto

//   - creare una variabile basePrice che sarà uguale a 0.21€ * il numero di km inseriti dall'utente


if (isNaN(kmNumber) || isNaN(age)) {
  document.getElementById("error").innerHTML = "Hai inserito dei valori che non sono corretti";
} else {

  let basePrice = kmNumber * 0.21;

  //   - creare una variabile che applichi lo sconto del 20% ai minorenni

  //     - SE l'utente ha inserito un'età minore di 18 allora la variabile basePrice sarà moltiplicata per 20 e divisa per 100

  //   - creare una variabile che applichi lo sconto del 40% agli over 65

  //     - SE l'utente ha inserito un'età superiore a 65 allora la variabile basePrice sarà moltiplicata per 40 e divisa per 100

  // # Mostrare output del prezzo

  //   - Stampare a console il prezzo finale del biglietto

  if (age < 18) {
    const minorDiscount = (basePrice * 20) / 100;
    basePrice = basePrice - minorDiscount;
  }
  else if (age > 65) {
    const oldDiscount = (basePrice * 40) / 100;
    basePrice = basePrice - oldDiscount;
  }

  document.getElementById("finalPrice").innerHTML = "Il prezzo del tuo biglietto è di: " + basePrice.toFixed(2) + "€";
}