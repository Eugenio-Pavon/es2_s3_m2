// Il tuo compito è creare un sito e-commerce per Smartphones.
// L'homepage che stai per creare sarà la vetrina dei prodotti disponibili, con qualche informazione per ciascun prodotto.
// Non sono richieste funzionalità di carrello/cassa.
// - Completa gli esercizi dall'1 al 6 SOLAMENTE con HTML
// - Completa gli altri esercizi con JS

//ESERCIZI IN HTML

// ESERCIZIO 1: Inserisci un tag h1 con il nome del tuo negozio
// ESERCIZIO 2: Aggiungi una tabella con i 5 prodotti più in vista del tuo negozio
// ESERCIZIO 3: Aggiungi per ogni prodotto un'immagine, un titolo, una descrizione e un prezzo
// ESERCIZIO 4: Per ogni elemento della tabella aggiungi un link di Amazon al prodotto esistente
// ESERCIZIO 5: Aggiungi un footer con il nome e l'indirizzo del tuo negozio
// ESERCIZIO 6: Aggiungi un campo testuale in cui l'utente può lasciare un commento su un prodotto (al momento non serve inserire nessuna "vera" funzionalità di POST/salvataggio!)

//ESERCIZI IN JS
// ESERCIZIO 7: Scrivi una funzione per cambiare il contenuto del tag h1 in qualcos'altro
// ESERCIZIO 8: Scrivi una funzione per cambiare il colore di background della pagina
// ESERCIZIO 9: Scrivi una funzione per cambiare l'indirizzo presente nel futuro in un altro, fittizio
// ESERCIZIO 10: Scrivi una funzione per aggiungere una classe CSS ad ogni link Amazon della tabella
// ESERCIZIO 11: Scrivi una funzione per aggiungere/togliere una classe CSS a tutte le immagini della tabella; questa classe deve modificare la visibilità/invisibilità dell'immagine
// ESERCIZIO 12: Scrivi una funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata

/*
const cambioTitolo = function () {
  let vecchioTesto = document.querySelector("h1");
  vecchioTesto.textContent = "Nuovo negozio";
};

cambioTitolo();
*/
console.log({ document });

const cambiareTitolo = function () {
  let h1 = document.querySelector("h1");
  h1.textContent = "Nuovo negozio";
};

cambiareTitolo();

const cambiaColore = function () {
  let body = document.querySelector("body");
  body.style.backgroundColor = "green";
};

cambiaColore();
const cambiaIndirizzo = function () {
  let indirizzo = document.querySelector("span");
  indirizzo.textContent = "via roma";
};
cambiaIndirizzo();

const nuovaClasse = function () {
  const links = document.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    link.classList.add("aggiunta");
  }
};
nuovaClasse();
const cambiaImg = function () {
  const immagini = document.querySelectorAll("img");
  for (let i = 0; i < immagini.length; i++) {
    let immagine = immagini[i];
    immagine.classList.add("visibilita");
    immagine.style.visibility = "visible";
  }
};

cambiaImg();

const colori = function () {
  const prezzi = document.querySelectorAll("h3");
  for (let i = 0; i < prezzi.length; i++) {
    const rosso = Math.round(Math.random() * 255);
    const verde = Math.round(Math.random() * 255);
    const blu = Math.round(Math.random() * 255);
    prezzi[i].style.color = `rgb( ${rosso}, ${verde}, ${blu})`;
  }
};
colori();
